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
};

// console.log(Object.keys(library)[1]);

// console.log(Object.values(library)[1]);
//console.log(Object.keys(Object.values(library)[1]));
//[ 'p01', 'p02' ]

//console.log(Object.values(Object.values(library)[1])[1].name);
let d=Object.values(Object.values(library)[0])[1].name;
//console.log(d);

//console.log(Object.keys(library));
let methodResult;
let whichTrack="";
// choice method to find the tracks
const choiceMethod = (method) => {
  for ( let i=0; i<Object.keys(library).length; i++ ){
   if(Object.keys(library)[i] === method){
      methodResult=Object.values(library)[i];
      ///pick list number
      //console.log(Object.keys(methodResult).toString());
      //console.log(Object.keys(methodResult).length);
      // p01,p02
      // whichTrack=Object.keys(methodResult)[1];
      // console.log(whichTrack); 
      //if ( num1 === "all" ){
        const whichTrackWant =( num )=>{

        };
        for ( let w=0; w<Object.keys(methodResult).length; w++ ){
          whichTrack=Object.keys(methodResult)[w].toString();
          console.log(whichTrack); 
      //  };
      if ( num1 === 1 ){ 
        whichTrack=Object.keys(methodResult)[1].toString();
        console.log(whichTrack); 
      }
      
      // if ( num1 === "all" ){
      //   for ( let w=0; w<Object.keys(methodResult).length; w++ ){
      //     whichTrack=Object.keys(methodResult)[w].toString();
      //     console.log(whichTrack); 
      //   }{
      //     whichTrack=Object.keys(methodResult)[num1].toString();
      //     console.log(whichTrack); 
      //   }
      // }
      
    }
  }

}; 
choiceMethod("tracks", );
whichTrackWant( 0, 1 );

// for( let i in d ){
//   console.log(i);
// }
// const t= { 
//   id: "p01", 
//   name1: "Coding Music", 

//   tracks: ["t01", "t02"] 
// }

// // console.log(Object.keys(t)[1]);

// // console.log(Object.values(t)[1]);
// // console.log(t.id);


// const playlists= {
//   p01: { 
//     id: "p01", 
//     name: "Coding Music", 
//     tracks: ["t01", "t02"] 
//   },

//   p02: { 
//     id: "p02", 
//     name: "Other Playlist", 
//     tracks: ["t03"] 
//   },
// }
// console.log(Object.keys(playlists)[1]);

// console.log(Object.values(playlists)[1].name);


// ['t01', t02', 't03']
// for ( let item in library ){
//   //console.log(item);
//   if ( item==="tracks" ){
//    // console.log(library.tracks);
//     for ( let itemObKey in library.tracks ){
//         console.log(itemObKey);
//       // for ( let key in itemObKey){
//         //itemObKey=itemObKey.toString;
         
//         console.log((library["tracks"].itemObKey);
//       //   };
//     }
//   }
// }
// for ( let type in library ){
//   if ( type === "tracks"){
//     for (let trackNum in library['tracks']{
//       //let trackOb=library['tracks'];
//        console.log(library['tracks'].trackNum);
//     }
//   }
// }

// /////////////////////////////
// // FUNCTIONS TO IMPLEMENT:
// /////////////////////////////

// // prints a list of all playlists, in the form:
// //p01: Coding Music - 2 tracks
// //p02: Other Playlist - 1 tracks

// // playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "playlistKeyObNumOfTracks + " tracks"
// const printPlaylists = function (lib) {
//   // get the inner {} ---> Object.values
//   let result = "";
//   // playlist's object {}
//   const musicCate = Object.values(lib)[1];
//   const playlistKeyNumArr = Object.keys(musicCate);
//   const playlistKey = Object.values(musicCate);
//   for (let i = 0; i < playlistKeyNumArr.length; i++) {
//     //console.log(playlistKey[1]);
//     let playlistKeyObNameOfTrack = playlistKey[i]["name"];
//     let playlistKeyObNumOfTracks = playlistKey[i]["tracks"].length + 1;
//     let playlistKeyObIDOfTrack = playlistKey[i]["id"];
//     result +=
//       playlistKeyObIDOfTrack +
//       ": " +
//       playlistKeyObNameOfTrack +
//       " - " +
//       playlistKeyObNumOfTracks +
//       " tracks" +
//       "\n";
//   }
//   return result;
// };
// //console.log();

// // // return playlistKeyObIDOfTrack + ": "+  playlistKeyObNameOfTrack + " - "+playlistKeyObNumOfTracks + " tracks";

// ////==== this ====////
// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function (lib2) {
//   let result = "";
//   const musicCate = Object.values(lib2)[0];
//   const playlistKeyNumArr = Object.keys(musicCate);
//   const playlistKey = Object.values(musicCate);
//   for (let i = 0; i < playlistKeyNumArr.length; i++) {
//     let playlistKeyObNameOfTrack = playlistKey[i]["name"];
//     let playlistKeyObArtistOfTracks = playlistKey[i]["artist"];
//     let playlistKeyObAlbumOfTracks = playlistKey[i]["album"];
//     let playlistKeyObIDOfTrack = playlistKey[i]["id"];
//     result +=
//       playlistKeyObIDOfTrack +
//       ": " +
//       playlistKeyObNameOfTrack +
//       " by " +
//       playlistKeyObArtistOfTracks +
//       " (" +
//       playlistKeyObAlbumOfTracks +
//       ") " +
//       "\n";
//   }
//   return result;
// };
// //console.log();

// // ////==== this ====////
// // // prints a list of tracks for a given playlist, using the following format:
// // // p01: Coding Music - 2 tracks
// // // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function (playlistId) {
//   console.log(typeof printTracks(library));
//   //result=printTracks(library) + printPlaylists(library);
//   //return result;
// };
// console.log(printPlaylist(library));

// // ////==== this ====////
// // // adds an existing track to an existing playlist
// // const addTrackToPlaylist = function(trackId, playlistId) {

// // }

// // ////==== this ====////
// // // generates a unique id
// // // (already implemented: use this for addTrack and addPlaylist)
// // const generateUid = function() {
// //   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// // }

// // ////==== this ====////
// // // adds a track to the library
// // const addTrack = function(name, artist, album) {

// // }

// // ////==== this ====////
// // // adds a playlist to the library
// // const addPlaylist = function(name) {

// // }

// // ////==== this ====////
// // // STRETCH:
// // // given a query string string, prints a list of tracks
// // // where the name, artist or album contains the query string (case insensitive)
// // // tip: use "string".search("tri")
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// // const printSearchResults = function(query) {

// // }
