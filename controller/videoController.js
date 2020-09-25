import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  const videos = await Video.find({});
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  // TODO: video info save
  const {
    file: { path },
    body: { title, description },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
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
