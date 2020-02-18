import React, { Component } from "react";
import config from '../../data/SiteConfig'
export class LastFM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastfmStatus: "",
      trackTitle: "",
      trackArtist: "",
      trackUrl: ""
    };
  }

  render() {
    // Set API endpoints
    const API_BASE = `https://ws.audioscrobbler.com/2.0/?method=user`;
    const RECENT_TRACKS = `${API_BASE}.getRecentTracks&user=${config.lastfm.username}&api_key=${config.lastfm.apikey}&format=json&limit=${config.lastfm.limit}`;
    const TOP_TRACKS = `${API_BASE}.gettoptracks&user=${config.lastfm.username}&api_key=${config.lastfm.apikey}&format=json&limit=${config.lastfm.limit}&period=${config.lastfm.period}&extended=1`;

    // Convert time period value to friendly message
    const getFriendlyTimePeriod = period => {
      let timePeriod = "";
      switch (period) {
        case "overall":
          timePeriod = "For a while now";
          break;

        case "7day":
          timePeriod = "This week";
          break;

        case "1month":
          timePeriod = "This month";
          break;

        case "3month":
          timePeriod = "The past few months";
          break;

        case "6month":
          timePeriod = "Most of this year";
          break;

        case "12month":
          timePeriod = "This year";
          break;

        default:
          timePeriod = "These days";
          break;
      }
      return timePeriod;
    };

    fetch(RECENT_TRACKS)
      .then(response => response.json())
      .then(data => {
        // Get the first track from the response
        const firstTrack = data.recenttracks.track[0];

        // Check for 'nowplaying' attribute
        const currentlyPlaying = firstTrack["@attr"]
          ? firstTrack["@attr"].nowplaying
          : null;

        if (currentlyPlaying) {
          setStatusMessage(firstTrack, true);
        } else {
          // Nothing playing, query API for top track for the selected time period
          fetch(TOP_TRACKS)
            .then(response => response.json())
            .then(trackData => {
              setStatusMessage(trackData.toptracks.track[0], false);
            })
            .catch(err => {
              console.error("Fetch Error :-S", err);
            });
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

    // Update the DOM with track info from API response
    const setStatusMessage = (topTrack, isTrackPlaying) => {
      this.setState({
        trackTitle: topTrack.name,
        trackArtist: isTrackPlaying
          ? topTrack.artist["#text"]
          : topTrack.artist.name,
        trackUrl: topTrack.url,
        //trackArtwork : topTrack.image[2]["#text"],
        lastfmStatus: isTrackPlaying
          ? `Right now (literally) I'm listening to `
          : `${getFriendlyTimePeriod(
              config.lastfm.period
            )} I've mainly been listening to `
      });
    };

    return (
      <>
        {this.state.lastfmStatus && (<p className="lastfm-status">
          {this.state.lastfmStatus}{" "}
          <a href={this.state.trackUrl} target="_blank">
            <span>{this.state.trackTitle}</span>
          </a>{" "}
          by <span>{this.state.trackArtist}</span>.
        </p>)}
        <p>
          You can see what else I've been listening to on my{" "}
          <a href="https://www.last.fm/user/ajaykarwal">Last.fm</a> or{" "}
          <a href="https://open.spotify.com/user/keynote">Spotify</a> profiles.
        </p>
      </>
    );
  }
}

export default LastFM;
