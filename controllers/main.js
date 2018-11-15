const Client = require('../models/Client')

exports.welcome = (req, res) => {
    req.cookies.uuid
    res.render('welcome')
}

exports.destination = (req, res) => {
    res.render('destination')
}

exports.bookingdate = (req, res) => {
    res.render('bookingdate')
}

exports.returndate = (req, res) => {
    res.render('returndate')
}

exports.budget = (req, res) => {
    res.render('budget')
}

exports.details = (req, res) => {
    res.render('details')
}

exports.interests = (req, res) => {
    res.render('interests')
}

exports.results = (req, res) => {
  res.render('results')
}

exports.dbInterests = (req, res) => {
    Client.findOneAndUpdate({ uuid: '1' }, { interests: req.body.interests }, err => {
        if (err) {
            console.log(err)
        }
        res.redirect('/budget')
    })
}
