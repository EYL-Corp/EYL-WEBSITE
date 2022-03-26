const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/nav', (req, res) => {
    res.render('nav');
})

router.get('/home', (req, res) => {
    res.render('home');
})

router.get('/contact', (req, res) => {
    res.render('contact');
})

router.get('/equipe', (req, res) => {
    res.render('equipe');
})

module.exports = router;