const express = require("express");
const { dashboard, loginpage, loginUser, logOut, profile, passwordChangeForm, passwordChange, sendOtp, OTPForm, newPassword, verifyOTP, resetPassword } = require("../controllers/index.controller");
const userRrouter = require("./user.route");
const blogRrouter = require("./blog.route");
const router = express.Router();

router.get("/dashboard", dashboard);
router.get("/", loginpage);
router.post("/login-user", loginUser);
router.get("/user-logOut", logOut);
router.get("/user-profile", profile);
router.get("/user-passwordChange", passwordChangeForm);
router.post("/passwordChange", passwordChange);
router.post("/sendOtp",sendOtp);
router.get("/OTPForm",OTPForm);
router.get("/resetPasswordForm",newPassword);
router.post("/verifyOTP",verifyOTP);
router.post("/resetPassword", resetPassword)

router.use("/users", userRrouter);
router.use("/blogs", blogRrouter);

module.exports = router;