import React, { Component } from "react";
import config from "../../data/SiteConfig";

// Set API endpoints
const API_BASE = `https://ws.audioscrobbler.com/2.0/?method=user`;
const RECENT_TRACKS = `${API_BASE}.getRecentTracks&user=${config.lastfm.username}&api_key=${config.lastfm.apikey}&format=json&limit=${config.lastfm.limit}`;
const TOP_TRACKS = `${API_BASE}.gettoptracks&user=${config.lastfm.username}&api_key=${config.lastfm.apikey}&format=json&limit=${config.lastfm.limit}&period=${config.lastfm.period}&extended=1`;

export class LastFM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastfmStatus: "",
      trackTitle: "",
      trackArtist: "",
      trackUrl: "",
      trackArtistUrl: "",
      trackArtwork: ""
    };

    this.setStatusMessage = this.setStatusMessage.bind(this);
    this.getFriendlyTimePeriod = this.getFriendlyTimePeriod.bind(this);
    this.fetchLastfmData = this.fetchLastfmData.bind(this);
  }

  // Convert time period value to friendly message
  getFriendlyTimePeriod(period) {
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
  }

  // Update the DOM with track info from API response
  setStatusMessage(topTrack, isTrackPlaying) {
    this.setState({
      trackTitle: topTrack.name,
      trackArtist: isTrackPlaying
        ? topTrack.artist["#text"]
        : topTrack.artist.name,
      trackUrl: topTrack.url,
      trackArtistUrl: topTrack.artist.url,
      trackArtwork: topTrack.image[2]["#text"],
      lastfmStatus: isTrackPlaying
        ? `Right now (literally) I'm listening to `
        : `${this.getFriendlyTimePeriod(
            config.lastfm.period
          )} I've mainly been listening to `
    });
  }

  fetchLastfmData() {
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
          this.setStatusMessage(firstTrack, true);
        } else {
          // Nothing playing, query API for top track for the selected time period
          fetch(TOP_TRACKS)
            .then(response => response.json())
            .then(trackData => {
              this.setStatusMessage(trackData.toptracks.track[0], false);
            })
            .catch(err => {
              console.error("Fetch Error :-S", err);
            });
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  componentDidMount() {
    this.fetchLastfmData();
    this.timer = setInterval(() => this.fetchLastfmData(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      this.state.lastfmStatus && (
        <>
          <p>
            <span className="lastfm">
              {this.state.lastfmStatus}{" "}
              <a href={this.state.trackUrl} target="_blank">
                <span className="lastfm__track-title">
                  {this.state.trackTitle}
                </span>
              </a>{" "}
              by{" "}
              {this.state.trackArtistUrl ? (
                <a
                  className="lastfm__track-artist"
                  href={this.state.trackArtistUrl}
                >
                  {this.state.trackArtist}
                </a>
              ) : (
                <span className="lastfm__track-artist">
                  {this.state.trackArtist}
                </span>
              )}
            </span>
            .
          </p>
          <p>
            👆🏽 That data is being pulled directly from Last.fm which is linked
            to my Spotify account to show what I'm listening to in real-time or
            what I've been listening to most if I'm not currenly playing
            anything.
          </p>
        </>
      )
    );
  }
}

export default LastFM;
