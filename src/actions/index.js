// action creator, has to return plain js object
export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
