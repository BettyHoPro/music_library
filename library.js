const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },

  printPlaylists: function (lib) {
    for (let q in this.playlists) {
      console.log(`${q}: ${this.playlists[q].name} - ${this.playlists[q].tracks.length} tracks`);  
    };
  },

 printTracks: function (lib2) { 
    for (let a in this.tracks) {
      console.log(`${a}: ${this.tracks[a].name} by ${this.tracks[a].artist} (${this.tracks[a].album})`);
    }
  },

  printPlaylist: function (playlistId) {
  //  for (let c in library.playlists) {
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`); 
    for (let a in this.playlists[playlistId].tracks) {
      const idn = this.playlists[playlistId].tracks[a];
      console.log(`${idn}: ${this.tracks[idn].name} by ${this.tracks[idn].artist} (${this.tracks[idn].album})`);
    }
  },
  
  addTrackToPlaylist: function(trackId, playlistId) {
    let trackArray = this.playlists[playlistId].tracks;
    trackArray.push(trackId);
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`); 
    for (let a in this.playlists[playlistId].tracks) {
      const idn = this.playlists[playlistId].tracks[a];
      console.log(`${idn}: ${this.tracks[idn].name} by ${this.tracks[idn].artist} (${this.tracks[idn].album})`);
    }
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    let arr = [];
    for (let s in this.tracks){
      arr.push(s);
    }
    this.tracks[`t0${arr.length + 1}`] = {
      id: `t0${arr.length + 1}`,
      name,
      artist,
      album,
    }
    console.log(this.tracks);
  },

  addPlaylist: function(name) {
    let arrX = [];
    for (let x in this.playlists){
      arrX.push(x);
    }
    let choiceTrackToAddPlist = [];
    this.playlists[`p0${arrX.length + 1}`] = {
      id: `p0${arrX.length + 1}`, name, tracks: choiceTrackToAddPlist,
    } 
    console.log(this.playlists);
  }
};

console.log('===print play lists====');
library.printPlaylists(this);
console.log('===print tracks====');
library.printTracks(this);
console.log('===print play list====');
library.printPlaylist("p01");
console.log('===add ratck to play list====');
library.addTrackToPlaylist("t03","p01");
console.log('===add track====');
library.addTrack("Theme from Q","Objekt", "Objekt #4");
console.log('===add playlist====');
library.addPlaylist("myfavor");


// /////////////////////////////
// // FUNCTIONS TO IMPLEMENT:
// /////////////////////////////

// // prints a list of all playlists, in the form:
// //p01: Coding Music - 2 tracks
// //p02: Other Playlist - 1 tracks

// // playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "playlistKeyObNumOfTracks + " tracks"
// printPlaylists: function (lib) {
//   for (let q in library.playlists) {
//     console.log(`${q}: ${library.playlists[q].name} - ${library.playlists[q].tracks.length} tracks`);  
//   };
// };
// printPlaylists(library);
// console.log('=======');
// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function (lib2) { 
//   for (let a in library.tracks) {
//     console.log(`${a}: ${library.tracks[a].name} by ${library.tracks[a].artist} (${library.tracks[a].album})`);
//   }
// };
// printTracks(library);
// console.log('=======');
// // // prints a list of tracks for a given playlist, using the following format:
// // // p01: Coding Music - 2 tracks
// // // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function (playlistId) {
// //  for (let c in library.playlists) {
//   console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`); 
//   for (let a in library.playlists[playlistId].tracks) {
//     const idn = library.playlists[playlistId].tracks[a];
//     console.log(`${idn}: ${library.tracks[idn].name} by ${library.tracks[idn].artist} (${library.tracks[idn].album})`);
//   }
// };
// printPlaylist("p01");
// console.log('=======');
// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//   let trackArray = library.playlists[playlistId].tracks;
//   trackArray.push(trackId);
//   //console.log(`${playlistId} :${library.playlists.p01.tracks}`);

//   console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`); 
//   for (let a in library.playlists[playlistId].tracks) {
//     const idn = library.playlists[playlistId].tracks[a];
//     console.log(`${idn}: ${library.tracks[idn].name} by ${library.tracks[idn].artist} (${library.tracks[idn].album})`);
//   }
// }
// addTrackToPlaylist("t03","p01");
// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }
// //console.log(library);

// ////==== this ====////
// // adds a track to the library
// const addTrack = function(name, artist, album) {
//   let arr = [];
//   for (let s in library.tracks){
//     arr.push(s);
//   }
//   library.tracks[`t0${arr.length + 1}`] = {
//     id: `t0${arr.length + 1}`,
//     name,
//     artist,
//     album,
//   }
//   console.log(library.tracks);
// }
// addTrack("Theme from Q","Objekt", "Objekt #4");
// console.log('=======');


// ////==== this ====////
// // adds a playlist to the library
// const addPlaylist = function(name) {
//   let arrX = [];
//   for (let x in library.playlists){
//     arrX.push(x);
//   }
//   let choiceTrackToAddPlist = [];
//   library.playlists[`p0${arrX.length + 1}`] = {
//     id: `p0${arrX.length + 1}`, name, tracks: choiceTrackToAddPlist,
//   } 
//   console.log(library.playlists);
// }
// addPlaylist("myfavor");

// // ////==== this ====////
// // // STRETCH:
// // // given a query string string, prints a list of tracks
// // // where the name, artist or album contains the query string (case insensitive)
// // // tip: use "string".search("tri")
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// // const printSearchResults = function(query) {

// // }
