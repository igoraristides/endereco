import React from "react";
import ContentLoader from "../../../components/ContentLoader";

const TdContentLoad = () => {
  return (
    <ContentLoader
      speed={800} // 800 ms
      width="100%"
      height={8} // 8 px
      borderRadius={4} // 4 px
      backgroundColor="#293747"
      foregroundColor="#314357"
    />
  );
};

export default TdContentLoad;
