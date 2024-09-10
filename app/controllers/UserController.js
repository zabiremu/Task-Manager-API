import USER_MODEL from "../models/UserModel.js";

export const Registration = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await USER_MODEL.create(reqBody);
    return res
      .status(200)
      .json({ status: "success", message: "user login successfully" });
  } catch (error) {
    return res.status(400).json({ status: "error", message: error });
  }
};

export const Login = async (req, res) => {
  
};

export const ProfileDetails = async (req, res) => {
  return res.json({ status: "success" });
};

export const ProfileUpdate = async (req, res) => {};

export const EmailVerify = async (req, res) => {
  return res.json({ status: "success" });
};

export const CodeVerify = async (req, res) => {
  return res.json({ status: "success" });
};

export const ResetPassword = async (req, res) => {
  return res.json({ status: "success" });
};
