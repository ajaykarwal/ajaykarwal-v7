import React from "react";

const LastFM = (props) => {
  // var lastfmify = function(userConfig) {
  //   // Set up detaulf config options
  //   var config = {
  //     apikey: "965b2342a5837db0942394bbc9a31157",
  //     limit: 1,
  //     period: "1month", // overall | 7day | 1month | 3month | 6month | 12month
  //     selector: "",
  //     username: ""
  //   };
  //   // Merge config with userConfig
  //   config = Object.assign(config, userConfig);

  //   // Set API endpoints
  //   const RECENT_TRACKS = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${config.username}&api_key=${config.apikey}&format=json&limit=${config.limi}`;
  //   const TOP_TRACKS = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${config.username}&api_key=${config.apikey}&format=json&limit=${config.limit}&period=${config.period}&extended=1`;

  //   // Convert time period value to friendly message
  //   function getFriendlyTimePeriod(period) {
  //     var timePeriod = "";
  //     switch (period) {
  //       case "overall":
  //         timePeriod = "For a while now";
  //         break;

  //       case "7day":
  //         timePeriod = "This week";
  //         break;

  //       case "1month":
  //         timePeriod = "This month";
  //         break;

  //       case "3month":
  //         timePeriod = "The past few months";
  //         break;

  //       case "6month":
  //         timePeriod = "Most of this year";
  //         break;

  //       case "12month":
  //         timePeriod = "This year";
  //         break;

  //       default:
  //         timePeriod = "These days";
  //         break;
  //     }
  //     return timePeriod;
  //   }

  //   // Query DOM for element to place the message
  //   const lastfmStatusField = document.querySelector(config.selector);

  //   if (lastfmStatusField) {
  //     // Query LastFm API for recent tracks
  //     fetch(RECENT_TRACKS).then(response => {
  //       if (response.status !== 200) {
  //         console.warn(
  //           "Looks like there was a problem. Status Code: " + response.status
  //         );
  //         return;
  //       }

  //       response.json().then(data => {
  //         // Get the first track from the response
  //         var firstTrack = data.recenttracks.track[0];

  //         // Check for 'nowplaying' attribute
  //         var currentlyPlaying = firstTrack["@attr"]
  //           ? firstTrack["@attr"].nowplaying
  //           : null;

  //         if (currentlyPlaying) {
  //           updateDOM(firstTrack, true);
  //         } else {
  //           // Nothing playing, query API for top track for the selected time period
  //           fetch(TOP_TRACKS).then(response => {
  //             if (response.status !== 200) {
  //               console.warn(
  //                 "Looks like there was a problem. Status Code: " +
  //                   response.status
  //               );
  //               return;
  //             }
  //             response.json().then(trackData => {
  //               updateDOM(trackData.toptracks.track[0], false);
  //             });
  //           }).catch = err => {
  //             console.error("Fetch Error :-S", err);
  //           };
  //         }
  //       });
  //     }).catch = err => {
  //       console.error("Fetch Error :-S", err);
  //     };

  //     // Update the DOM with track info from API response
  //     function updateDOM(topTrack, isTrackPlaying) {
  //       var trackTitle = topTrack.name;
  //       var trackArtist = topTrack.artist.name;
  //       var trackArtwork = topTrack.image[2]["#text"];
  //       var trackUrl = topTrack.url;

  //       if (isTrackPlaying) {
  //         trackArtist = topTrack.artist["#text"];
  //         lastfmStatusField.innerHTML = `Right now (literally) I'm listening to <a href="${trackUrl}" target="_blank"><span>${trackTitle}</span></a> by <span>${trackArtist}</span>. `;
  //       } else {
  //         lastfmStatusField.innerHTML = `${getFriendlyTimePeriod(
  //           config.period
  //         )} I've mainly been listening to <a href="${trackUrl}" target="_blank"><span>${trackTitle}</span></a> by <span>${trackArtist}</span>. `;
  //       }
  //     }
  //   }
  // };

  // // Initialise with custom config
  // lastfmify({
  //   username: "ajaykarwal",
  //   selector: "#lastfmStatus",
  //   period: "7day" // overall | 7day | 1month | 3month | 6month | 12month
  // });
  return <span id="lastfmStatus"></span>;
};

export default LastFM;
