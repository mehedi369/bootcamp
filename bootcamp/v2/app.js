// Imports
const express = require('express');
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');

// Settings
mongoose.connect('mongodb://localhost:27017/boot_camp', { useNewUrlParser: true });
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Schema setup
let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// Model for the campground 
let Campground = mongoose.model('Campground', campgroundSchema);

// Create DB with campground Name and Image for data persistance
// Campground.create({
//   name: "Uttara",
//   image: "https://farm8.staticflickr.com/7357/8945295870_d3fc5fdbee.jpg",
//   image: "https://farm8.staticflickr.com/7357/8945295870_d3fc5fdbee.jpg",
//   description: "Uttara campground is the best campground in our Bootcamp"
// }, (err, campground) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Newly created campgrounds');
//     console.log(campground);
//   }
// });

// Get request for the root or landing page
app.get('/', (req, res) => {
  res.render('landing');
});

// 0.INDEX - show all campgrounds
// Get request for the Campgrounds
app.get('/index', (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { campgrounds: allCampgrounds });
    }
  });
});

// 1.CREATE - add new campground to DB
// Post request for the campgrounds 
app.post('/index', (req, res) => {
  // get name,image and description data from the form and add it to the array 
  let name = req.body.name;
  let image = req.body.image;
  let desc = req.body.desc;
  // Making object with the data
  let newCampground = { name: name, image: image,  description: desc};

  // Create a new campground from the user provided and save to the DB
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      // Redirect back to the campground-page
      res.redirect('/index');
    }
  });
});

// 2.NEW - show form to create new campground
// Get request for the form.
app.get('/index/form', (req, res) => {
  res.render('form');
});

// 3.SHOW - Show info about one campground
// This route must be initialize at the end - Important
app.get('/index/:id', (req, res) => {
  // find the campground with provided ID
  Campground.findById(req.params.id, (err, findCampground) => {
    if (err) {
      console.log(err);
    } else {
      // render show template with that campgrounds 
      // This campground obj will pass the data to the show template
      res.render('show', {campground : findCampground});
    }
  });
});

// Bootcamp server will listen to the port 3000.
app.listen(3000, () => {
  console.log("Boss! BootCamp is running on port: 3000");
});