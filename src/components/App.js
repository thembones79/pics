import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import fetchUnsplashDataArray from "../api/fetchUnsplashDataArray";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const images = await fetchUnsplashDataArray(term);

    this.setState({ images });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
