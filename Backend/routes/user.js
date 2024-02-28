const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../models/models");

router.post("/signup", (req, res) => {
  try {
    const { fullName, userEmail, username, password } = req.body;
    if (!fullName || !userEmail || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //check if username or email already exists
    User.findOne({ $or: [{ username: username }, { email: userEmail }] })
      .then((existingUser) => {
        if (existingUser) {
          return res
            .status(400)
            .json({ message: "Username or Email already Exists" });
        }
        //create new user
        bcrypt.hash(password, 10).then((hashedPassword) => {
          const newUser = new User({
            profile: { name: fullName },
            email: userEmail,
            username: username,
            password: hashedPassword,
          });
          newUser.save().then((user) => {
            const token = jwt.sign(
              {
                username: user.username,
                userId: user._id,
              },
              "Secret-String-for-the-example",
              { expiresIn: "1h" }
            );
            res.status(201).json({ message: "User Succesfully Created", token:token });
          });
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400), json({ message: "All fields are required" });
    }
    User.findOne({ username })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "Inavalid Credentials" });
        }
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res.status(401).json({ message: "Inavalid Credentials" });
            }
            const token = jwt.sign(
              {
                username: user.username,
                userId: user._id,
              },
              "Secret-String-for-the-example",
              { expiresIn: "1h" }
            );
            res.status(200).json({ message: "Login Successful", token:token });
          })
          .catch((err) => {
            res.status(500).json({ message: "Internal Server Error" });
          });
      })
      .catch();
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
