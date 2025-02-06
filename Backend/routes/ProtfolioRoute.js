const express = require('express');
const router = express.Router();
const { Intro, About } = require('../Models/ProtfolioModel');
const service = require('../Models/Sevice')
const blog = require('../Models/Blog')
const team = require('../Models/Team')

router.get('/portfolio-data', async (req, res) => {
   try {
     const intros = await Intro.find();
     const abouts = await About.find();
     const services = await service.find();
     const teams =   await team.find();
     const blogs = await blog.find();

     res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      service: services[0],
      team : teams[0],
      blog: blogs[0]

     })

    
   } catch (error) {
    res.status(500).send(error)
   }
});

module.exports = router;
