import React from "react";
import SearchBar from "./SearchBar";
import fetchUnsplashDataArray from "./fetchUnsplashDataArray"

class App extends React.Component {

  state = {images: []}



async onSearchSubmit(term) {
console.log(await fetchUnsplashDataArray(term))
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
