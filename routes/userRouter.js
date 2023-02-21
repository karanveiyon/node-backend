const express = require('express');
const router = express.Router();
const User = require('../modals/userModule');

// user add
router.post('/adduser', async(req, res)=>{
  const data = await new User({
    name: req.body.name,
    rollnumber: req.body.rollnumber,
    subject: req.body.subject
  })
  try {
    const dataToSave = await data.save();
    res
      .status(200)
      .json({ message: "user successfully created", user: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// user list

router.get("/getuserList", async (req, res) => {
  try {
    const data = await User.find().sort({ createdAt: -1 });
    res.json({ Result: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getuser/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data = await User.findOne({name:name}).sort({ createdAt: -1 });
    res.json({ Result: data });
  }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;