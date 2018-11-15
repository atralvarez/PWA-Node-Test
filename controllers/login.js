const Client = require('../models/Client')
const request = require('request')
const client_id = 'app.bbva.travelexp',
    redirect_uri = 'http://51.15.245.106:1234/login/bbva_token',
    secret_id = '0izO7zEPNCnk9j%v3esvX1fXv*2v@55wLFyvFmBdaifnYdZAcnVzard*jFo$3eoT'

exports.loginPage = (req, res) => {
    res.render('login')
}

exports.bbvaToken = (req, res) => {


    const profile = new Client({
        uuid: '1'/*userData.userId*/,
        name: 'Aitor'/*userData.firstName*/,
        surname: 'Alvarez'/*userData.surname*/,
        gender: 'Male'/*userData.sex*/,
        age: '20'/*((new Date()).getFullYear()) - (new Date(userData.birthdate).getFullYear())*/,
        email:'atr@mail.com' /*userData.email*/
    })
    profile.save(async(err) => {
        if (err) {
            console.log(err)
        }
      //  res.cookie('uuid', userData.userId);
        res.redirect('/login')
    })

}
