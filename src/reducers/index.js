import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Na sever", duration: "3:44" },
    { title: "Po schodoch", duration: "4:03" },
    { title: "Prvni signalni", duration: "3:52" },
    { title: "Zelva", duration: "3:21" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
