import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// is re-ran every time state is changed, if there is any change in redux store, every time we run reducers
const mapStateToProps = state => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList); // connect creates a react component
