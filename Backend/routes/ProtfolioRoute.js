const express = require('express');
const router = express.Router();
const { Intro, About } = require('../Models/ProtfolioModel');
const service = require('../Models/Sevice');
const blog = require('../Models/Blog');
const team = require('../Models/Team');

// সব ডাটা আনতে API
router.get('/portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const services = await service.find();
        const teams = await team.find();
        const blogs = await blog.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            service: services,
            team: teams,
            blog: blogs,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// **Intro Update API**
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(  // ✅ এখানে "Intro" মডেল ব্যবহার করা হয়েছে
            { _id: req.body._id }, 
            req.body, 
            { new: true }
        );

        if (!intro) {
            return res.status(404).json({ success: false, message: "Intro data not found!" });
        }

        res.status(200).json({
            data: intro,
            success: true,
            message: "Intro updated successfully!"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});


// **About Update API**
// ✅ সঠিক মডেল

router.post('/update-about', async (req, res) => {
  try {
      const about = await About.findOneAndUpdate(
          { _id: req.body._id }, 
          req.body, 
          { new: true, runValidators: true }
      );

      if (!about) {
          return res.status(404).json({ success: false, message: "About data not found!" });
      }

      res.status(200).json({
          data: about,
          success: true,
          message: "About section updated successfully!"
      });
  } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

// ** About API**


module.exports = router;
