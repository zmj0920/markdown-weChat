import React from "react";
import ReactDOM from "react-dom";

import MarkdownNice from "./MarkdownNice/Index";
import * as serviceWorker from "./serviceWorker";

const useImageHosting = {
  url: "https://imgkr.com/api/files/upload",
  name: "图壳",
  isSmmsOpen: false,
  isQiniuyunOpen: false,
  isAliyunOpen: true,
  isGiteeOpen: true,
  isGitHubOpen: true,
};

ReactDOM.render(
  <MarkdownNice useImageHosting={useImageHosting} defaultTitle="前端学习之道" />,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
