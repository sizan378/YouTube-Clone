import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniNz6dgtCdi3lm7uCWSOB0aaJA5sAU-plqzcANT=s88-c-k-c0x00ffffff-no-rj"
        channel="programming"
        verified
        subscription="443K"
        noOfVideos={382}
        description="You can find any video of programming"
      />
      <hr />

      <VideoRow
        image="https://yt3.ggpht.com/ytc/AAUvwniNz6dgtCdi3lm7uCWSOB0aaJA5sAU-plqzcANT=s88-c-k-c0x00ffffff-no-rj"
        channel="programming"
        views="43M"
        subs="443K"
        timestamp="1 houre video"
        title="This is new video"
        description="You can find any video of programming"
      />
    </div>
  );
}

export default SearchPage;
