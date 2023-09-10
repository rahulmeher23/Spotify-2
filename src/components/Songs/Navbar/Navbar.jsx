import React, { useContext, useState } from "react";

import { FilterContext } from "../../../FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavbarModule.css";

const Navbar = () => {
  const [tab, setTab] = useState("forYou");
  const { songs, setSongs, allSongs } = useContext(FilterContext);

  return (
    <div className="menu-search-navbar">
      <div className="menu-navbar">
        <h2
          className={
            "for-you-menu menu-items " +
            (tab === "forYou" ? "selected-tab" : "")
          }
          onClick={() => {
            setTab("forYou");
            setSongs(allSongs);
            // filterDispatch({ type: "FOR_YOU" });
          }}
        >
          For You
        </h2>
        <h2
          className={
            "top-tracks-menu menu-items " +
            (tab === "topTracks" ? "selected-tab" : "")
          }
          onClick={() => {
            setTab("topTracks");
            setSongs(allSongs.filter((song) => song.top_track === true));
            // filterDispatch({ type: "TOP_TRACKS" });
          }}
        >
          Top Tracks
        </h2>
      </div>

      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Songs, Artists"
          //   onChange={(e) => {
          //     filterDispatch({ type: "SEARCH", payload: e.target.value });
          //   }}
        />
        <div className="search-icon-container">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
