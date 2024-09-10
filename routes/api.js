import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskController.js";
import * as UserController from "../app/controllers/UserController.js";

// Users
router.post("/registration", UserController.Registration);
router.post("/login", UserController.Login);
router.get("/profile-details", UserController.ProfileDetails);
router.post("/profile-update", UserController.ProfileUpdate);
router.post("/email-verify", UserController.EmailVerify);
router.post("/code-verify", UserController.CodeVerify);
router.post("/reset-password", UserController.ResetPassword);

// Task
router.post("/create-task", TaskController.CreateTask);
router.get("/update-task-status", TaskController.UpdateTaskStatus);
router.get("/task-list-b-status", TaskController.TaskListByStatus);
router.get("/delete-task", TaskController.DeleteTask);
router.get("/count-task", TaskController.CountTask);

export default router;
