const express = require('express');
const router = express.Router();
const { Intro, About } = require('../Models/ProtfolioModel');

router.get('/portfolio-data', async (req, res) => {
   try {
     const intros = await Intro.find()
     const abouts = await About.find();

     res.status(200).send({
      intro: intros[0],
      about: abouts[0]
     })

    
   } catch (error) {
    res.status(500).send(error)
   }
});

module.exports = router;
