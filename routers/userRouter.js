import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controller/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
