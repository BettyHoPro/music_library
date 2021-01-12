const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// ['t01', t02', 't03']


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
//p01: Coding Music - 2 tracks
//p02: Other Playlist - 1 tracks

// playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "playlistKeyObNumOfTracks + " tracks"
const printPlaylists = function(lib) {
 // get the inner {} ---> Object.values
  let result = '';
 // playlist's object {}
  const musicCate=(Object.values(lib))[1];
  const playlistKeyNumArr=Object.keys(musicCate);
  const playlistKey=Object.values(musicCate);
  for ( let i=0; i<playlistKeyNumArr.length; i++){ 
  //console.log(playlistKey[1]);
    let playlistKeyObNameOfTrack=playlistKey[i]["name"];
    let playlistKeyObNumOfTracks=playlistKey[i]["tracks"].length+1;
    let playlistKeyObIDOfTrack=playlistKey[i]["id"];
    result += playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "+playlistKeyObNumOfTracks + " tracks" + "\n"
   }
  return result;
}
console.log(printPlaylists(library));

// return playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "+playlistKeyObNumOfTracks + " tracks"; 




////==== this ====////
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(lib2) {
   let result = '';
   const musicCate=(Object.values(lib2))[0];
   const playlistKeyNumArr=Object.keys(musicCate);
   const playlistKey=Object.values(musicCate);
   for ( let i=0; i<playlistKeyNumArr.length; i++){ 
     let playlistKeyObNameOfTrack=playlistKey[i]["name"];
     let playlistKeyObArtistOfTracks=playlistKey[i]["artist"];
     let playlistKeyObAlbumOfTracks=playlistKey[i]["album"];
     let playlistKeyObIDOfTrack=playlistKey[i]["id"];
     result += playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " by "+playlistKeyObArtistOfTracks + " ("+ playlistKeyObAlbumOfTracks+ ") " + "\n"
    }
  return result;
}
console.log(printTracks(library));

// ////==== this ====////
// // prints a list of tracks for a given playlist, using the following format: 
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {

// }


// ////==== this ====////
// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {

// }


// ////==== this ====////
// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// ////==== this ====////
// // adds a track to the library
// const addTrack = function(name, artist, album) {

// }


// ////==== this ====////
// // adds a playlist to the library
// const addPlaylist = function(name) {

// }


// ////==== this ====////
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }