const express = require('express');
const session = require('express-session');
const path = require('path');
const { Double } = require('mongodb');
const alert = require('alert');
//const mongoStore = require('connect-mongo');
const e = require('connect-flash');
const app = express();

app.use(session({
  'secret': 'thisIsSecret',
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//const MongoClient = require('mongodb').MongoClient;
const userx={username: 'admin', password: 'admin', wantToGo: []};
app.get('/', function (req, res) {
  res.render('login');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res) {
  //mongodb://127.0.0.1 (for the offline mongoDB)
  //mongodb+srv://admin:admin@travelguide.vrzispt.mongodb.net/test (this is for the mongoDB atlas connected link(online database))
  // MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //   if (err) throw err;
  //   var db = client.db('Credentials');
  //   db.collection('User info').findOne({ username: req.body.username, password: req.body.password }, function (err, result) {
  //     if (result && result.username == req.body.username && result.password == req.body.password) {
  //       req.session.username = req.body.username;
  //       res.render('home');
  //       }
  //       else {
  //         alert('Please make sure that you are registered and entering the correct username and password');
  //         res.render('login');
  //       }
  //     });
  //   });
  //hard coded user for uploaded version
  if (req.body.username == "admin" && req.body.password == "admin") {
    req.session.username = req.body.username;
    res.render('home');
  }
  else {
    alert('Please make sure that you are registered and entering the correct username and password');
    res.render('login');
  }
});

app.get('/registration', function (req, res) {
  res.render('registration');
});

app.post('/register', function (req, res) {

  // MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //   if (err) throw err;
  //   var db = client.db('Credentials');
  //   db.collection('User info').findOne({ username: req.body.username }, function (err, result) {
  //     const notEmpty = db.collection('User info').findOne({ username: req.body.username });
  //     if (result) {
  //       alert('Username already taken. Please choost another one.');
  //       res.render('registration');
  //     } else {
  //       db.collection('User info').insertOne({ username: req.body.username, password: req.body.password, wantToGo: [] });
  //       alert('succesful registration');
  //       res.render('login');
  //     }
  //   });
  // });
  if(req.body.username=="admin"){
    alert('Username already taken. Please choost another one.');
    res.render('registration');
  }
  else{
    alert('registration wont work as this is an offline database copy of the project for faster experience as the online database takes alot of time to operate.');
  }
});

app.get('/hiking', function (req, res) {
  if (req.session.username) {
    res.render('hiking');
  } else {
    res.redirect('login');
  }
});

app.get('/inca', function (req, res) {
  if (req.session.username) {
    res.render('inca');
  } else {
    res.redirect('login');
  }
});

app.get('/annapurna', function (req, res) {
  if (req.session.username) {
    res.render('annapurna');
  } else {
    res.redirect('login');
  }
});

app.get('/cities', function (req, res) {
  if (req.session.username) {
    res.render('cities');
  } else {
    res.redirect('login');
  }
});

app.get('/paris', function (req, res) {
  if (req.session.username) {
    res.render('paris');
  } else {
    res.redirect('login');
  }
});

app.get('/rome', function (req, res) {
  if (req.session.username) {
    res.render('rome');
  } else {
    res.redirect('login');
  }
});

app.get('/islands', function (req, res) {
  if (req.session.username) {
    res.render('islands');
  } else {
    res.redirect('login');
  }
});

app.get('/bali', function (req, res) {
  if (req.session.username) {
    res.render('bali');
  } else {
    res.redirect('login');
  }
});

app.get('/santorini', function (req, res) {
  if (req.session.username) {
    res.render('santorini');
  } else {
    res.redirect('login');
  }
});

app.get('/wanttogo', function (req, res) {
  if (req.session.username) {
    let baliH = "hidden";
    let parisH = "hidden";
    let incaH = "hidden";
    let annapurnaH = "hidden";
    let santoriniH = "hidden";
    let romeH = "hidden";
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
        //   if (((user.wantToGo.includes('inca')))) {
        //     incaH = "";
        //   }
        //   if (((user.wantToGo.includes('bali')))) {
        //     baliH = "";
        //   }
        //   if (((user.wantToGo.includes('annapurna')))) {
        //     annapurnaH = "";
        //   }
        //   if (((user.wantToGo.includes('santorini')))) {
        //     santoriniH = "";
        //   }
        //   if (((user.wantToGo.includes('rome')))) {
        //     romeH = "";
        //   }
        //   if (((user.wantToGo.includes('paris')))) {
        //     parisH = "";
        //   }
        //   res.render('wanttogo', { inca: incaH, bali: baliH, annapurna: annapurnaH, santorini: santoriniH, rome: romeH, paris: parisH });
        // }
  //       )
  //   });
  // } else {
  //   res.redirect('login');
  // }
    if (((userx.wantToGo.includes('inca')))) {
      incaH = "";
    }
    if (((userx.wantToGo.includes('bali')))) {
      baliH = "";
    }
    if (((userx.wantToGo.includes('annapurna')))) {
      annapurnaH = "";
    }
    if (((userx.wantToGo.includes('santorini')))) {
      santoriniH = "";
    }
    if (((userx.wantToGo.includes('rome')))) {
      romeH = "";
    }
    if (((userx.wantToGo.includes('paris')))) {
      parisH = "";
    }
    res.render('wanttogo', { inca: incaH, bali: baliH, annapurna: annapurnaH, santorini: santoriniH, rome: romeH, paris: parisH });
  }
  else
  {
    res.render('login');
  }
});

app.post('/search', function (req, res) {
  if (req.session.username) {
    let text = req.body.Search.toLowerCase();

    let baliH = "hidden";
    let parisH = "hidden";
    let incaH = "hidden";
    let annapurnaH = "hidden";
    let santoriniH = "hidden";
    let romeH = "hidden";
    let message404 = "Destination not found!";
    if (text != "" && text != " ") {
      if ("inca trail to machu picchu".includes(text)) {
        incaH = "";
        message404 = "";
      }
      if ("annapurna circuit".includes(text)) {
        annapurnaH = "";
        message404 = "";
      }
      if ("paris".includes(text)) {
        parisH = "";
        message404 = "";
      }
      if ("rome".includes(text)) {
        romeH = "";
        message404 = "";
      }
      if ("bali island".includes(text)) {
        baliH = "";
        message404 = "";
      }
      if ("santorini island".includes(text)) {
        santoriniH = "";
        message404 = "";
      }
      if (message404 == "Destination not found!") {
        alert("Destination not found!");
      }
    }
    else {
      if (text == "") {
        message404 = "Please type your wanted search in the search bar";
        alert("Please type your wanted search in the search bar");
      } else {
        alert("Destination not found!");
      }
    }


    res.render('searchresults', { inca: incaH, bali: baliH, annapurna: annapurnaH, santorini: santoriniH, rome: romeH, paris: parisH, message404: message404 });
  }
  else {
    res.redirect('login');
  }
});

app.post('/addInca', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('inca')))) {
  //           user.wantToGo.push("inca");
  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {

  //       })
  //   });
  //   res.redirect('inca');
  // } else {
  //   res.redirect('login');
  // }
  if(req.session.username){
    if(!((userx.wantToGo.includes('inca')))){
      userx.wantToGo.push("inca");
      res.redirect('inca');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

app.post('/addAnnapurna', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('annapurna')))) {
  //           user.wantToGo.push("annapurna");

  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {
  //       })
  //   });
  //   res.redirect('annapurna');
  // } else {
  //   res.redirect('login');
  // }
  if(req.session.username){
    if(!((userx.wantToGo.includes('annapurna')))){
      userx.wantToGo.push("annapurna");
      res.redirect('annapurna');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

app.post('/addParis', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('paris')))) {
  //           user.wantToGo.push("paris");

  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {
  //       })
  //   });
  //   res.redirect('paris');
  // } else {
  //   res.redirect('login');
  // }
  if(req.session.username){
    if(!((userx.wantToGo.includes('paris')))){
      userx.wantToGo.push("paris");
      res.redirect('paris');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

app.post('/addRome', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('rome')))) {
  //           user.wantToGo.push("rome");

  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {
  //       })
  //   });
  //   res.redirect('rome');
  // } else {
  //   res.redirect('login');
  // }
  if(req.session.username){
    if(!((userx.wantToGo.includes('rome')))){
      userx.wantToGo.push("rome");
      res.redirect('rome');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

app.post('/addBali', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('bali')))) {
  //           user.wantToGo.push("bali");

  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {
  //       })
  //   });
  //   res.redirect('bali');
  // } else {
  //   res.redirect('login');
  // }
  if(req.session.username){
    if(!((userx.wantToGo.includes('bali')))){
      userx.wantToGo.push("bali");
      res.redirect('bali');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

app.post('/addSantorini', function (req, res) {
  // if (req.session.username) {
  //   MongoClient.connect("mongodb://127.0.0.1", function (err, client) {
  //     if (err) throw err;
  //     var db = client.db('Credentials');
  //     db.collection('User info').findOne(
  //       { username: req.session.username },
  //     )
  //       .then((user) => {
  //         if (!((user.wantToGo.includes('santorini')))) {
  //           user.wantToGo.push("santorini");

  //           db.collection('User info').findOneAndReplace(
  //             { username: req.session.username },
  //             user,
  //             {},
  //             function (err, numberAffected) {
  //             }
  //           )
  //         }
  //         else {
  //           alert("This destination is already in your want to go list!");
  //         }
  //       })
  //       .catch((error) => {
  //       })
  //   });
  //   res.redirect('santorini');
  // } else {
  //   res.redirect('login');
  //}
  if(req.session.username){
    if(!((userx.wantToGo.includes('santorini')))){
      userx.wantToGo.push("santorini");
      res.redirect('santorini');
    }
    else{
      alert("This destination is already in your want to go list!");
    }
  }
  else{
    res.redirect('login');
  }
});

if (process.env.PORT) {
  app.listen(process.env.PORT, function () { console.log('server started') });
} else {
  app.listen(3000, function () { console.log('server started on port 3000') });
}