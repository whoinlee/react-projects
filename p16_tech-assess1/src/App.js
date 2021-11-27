import React, { useState } from "react";
import "./App.css";

const apiData = {
  data: [
    {
      title: "Continue Watching",
      assets: [
        {
          title: "Parks & Recreation",
        },
        {
          title: "The Office",
        },
        {
          title: "Brooklyn 99",
        },
        {
          title: "Harry Potter and the Sorcerer's Stone",
        },
        {
          title: "When Harry Met Sally",
        },
      ],
    },
    {
      title: "Just Added",
      assets: [
        {
          title: "Trolls World Tour",
        },
        {
          title: "Fast & Furious",
        },
        {
          title: "The Breakfast Club",
        },
        {
          title: "Everybody Loves Raymond",
        },
        {
          title: "House",
        },
      ],
    },
    {
      title: "Harry Potter Collection",
      assets: [
        {
          title: "Harry Potter and the Sorcerer's Stone",
        },
        {
          title: "Harry Potter and the Chamber of Secrets",
        },
        {
          title: "Harry Potter and the Prisoner of Azkaban",
        },
        {
          title: "Harry Potter and the Goblet of Fire",
        },
        {
          title: "Harry Potter and the Order of the Phoenix",
        },
      ],
    },
    {
      title: "Trending",
      assets: [
        {
          title: "The Office",
        },
        {
          title: "Saturday Night Live",
        },
        {
          title: "Harry Potter and the Sorcerer's Stone",
        },
        {
          title: "Parks & Recreation",
        },
        {
          title: "Fast & Furious",
        },
      ],
    },
  ],
};

const Tile = ({ title }) => {
  const [hover, setHover] = useState(false);

  const onFocus = () => {
    console.log("I am focused");
    setHover(true);
  };

  const onUnfocus = () => {
    console.log("I am unfocused");
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onFocus}
      onMouseLeave={onUnfocus}
      style={{ ...styles.tile, ...(hover ? styles.tileHover : null) }}
    >
      <p style={styles.assetTitle}>{title ? title : "Hello World"}</p>
    </div>
  );
};

const Rail = ({ title, assets }) => {
  return (
    <div style={styles.rail}>
      <h2>{title}</h2>
      <div style={styles.tilesContainer}>
        {assets.map((item) => (
          <Tile title={item.title}></Tile>
        ))}
      </div>
    </div>
  );
};

function App() {
  const data = apiData.data;

  return (
    <div style={styles.container}>
      <h1>Browse Titles</h1>
      {data.map((item) => (
        <Rail title={item.title} assets={item.assets}></Rail>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: 16,
    width: 1408,
  },
  rail: {
    padding: 16,
    backgroundColor: "#ccc",
  },
  tilesContainer: {
    display: "flex",
    paddingRight: 16,
  },
  tile: {
    cursor: "pointer",
    minHeight: 125,
    minWidth: 200,
    maxWidth: 200,
    padding: 8,
    margin: "0px 16px 16px 0px",
    backgroundColor: "#999",
    transform: "scale(1)",
  },
  tileHover: {
    backgroundColor: "#777",
    transform: "scale(1.1)",
  },
  assetTitle: {
    fontSize: "16px",
  },
};

export default App;
