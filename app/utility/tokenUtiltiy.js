import { JWT_EXPIRY, TOKEN } from "../config/config.js";
import jwt from "jsonwebtoken";

const TokenEncode = (req, res, next) => {
  const KEY = TOKEN;
  const EXPIRES_TOKEN = { expiresIn: JWT_EXPIRY };
  const payload = {
    user_name: req.body.user_name,
    password: req.body.password,
  };
  jwt.sign(payload, key, EXPIRES_TOKEN);
};
