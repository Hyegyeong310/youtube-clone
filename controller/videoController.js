import { videoData } from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videoData });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videoData });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  // TODO: video info save
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(1234545));
};

export const editVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("editVideo", { pageTitle: "Edit Video", id });
};

export const deleteVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("deleteVideo", { pageTitle: "Delete Video", id });
};

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { pageTitle: "Video Detail", id });
};
