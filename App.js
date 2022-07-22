import React from "react";
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from "./requests";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
        <Nav />
        <Banner />

        <Row title="MICROPLEX ORIGINALS" fetchUrl={requests.fetchMicroPlexOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
