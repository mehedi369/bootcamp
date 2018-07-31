# BootCamp

1. Make three get route and a post route



```
// Import
const express = require('express');
const bodyParser = require('body-parser');

// Settings
let app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Temporary data for the bootcamp
let campgrounds = [
  { name: "Dhaka", image: "https://farm8.staticflickr.com/7357/8945295870_d3fc5fdbee.jpg" },
  { name: "Uttara", image: "https://farm8.staticflickr.com/7357/8945295870_d3fc5fdbee.jpg" },
  { name: "Gazipur", image: "https://farm8.staticflickr.com/7357/8945295870_d3fc5fdbee.jpg" }
];

// Get request for the root or landing page
app.get('/', (req, res) => {
  res.render('landing');
});

// Get request for the Campgrounds
app.get('/campgrounds', (req, res) => {
  // campgrounds array pass campgrounds in the campgrounds.ejs file 
  res.render('campgrounds', { campgrounds: campgrounds });
});

// Post request for the campgrounds 
app.post('/campgrounds', (req, res) => {
  // get data from the form and add it to the array 
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = { name: name, image: image };
  
  // Add item to the campground array
  campgrounds.push(newCampground);
  
  // Redirect back to the campground-page
  res.redirect('/campgrounds');
});

// Get request for the form
app.get('/campgrounds/form', (req, res) => {
  res.render('form');
});

// App will will listen on port 3000
app.listen(3000, () => {
  console.log("Boss! BootCamp is running on port: 3000");
});
```
