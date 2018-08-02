# BootCamp

# Add Mongoose -v2
* Install and configure mongoose
* Setup campground model
* Use Campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES
---------------

name      |     url     |     verb   |    description   
----------|-------------|------------|--------------------------------
INDEX     | /index      |     GET    | Display the list of all Camps 
NEW       | /index/form |     GET    | Display the form to make a new camp
CREATE    | /index      |     POST   | Add a new camp with description
SHOW      | /index/:id  |     GET    | Show info about Each Campground
