#                                                        BikeHailingApp
## Inspiration
Traveling is often made easy with cars, motorcycles, and even bicycles! To get from point A to B, we realized that we needed an efficient application to coordinate drivers with riders. So we set out to create BikeHail which is an easy app that finds closest driver matches with customer requests! We found that we could easily launch this product in foreign markets such as Europe and India where biking is quite common. This app has a wide customer range because no drivers license is needed for bikers!
## What it does
BikeHail allows the user to request a destination from their mobile phone. The GPS documents the user's current location and their desired Destination. The map will then calculate the distance between the two points using the longitude and latitude of the points and then map out the shortest path for the driver.
## How we built it
We used the HERE Maps API for a dynamic scaling world map. The details from this map go as far as specific roads and streets. With additions of UI elements like zoom in/out and different map views (satellite) we added some visual effects. We have several buttons that take in user input for the desired destination. Using an algorithm that takes in the user location and destination coordinates, we are able to compute the distance in miles the user has to travel.
## Challenges we ran into
We ran into a lot of difficulty with Firebase storage database. This was our first time using it and we had several problems with linking the database with our web application and querying data for the users.
## Accomplishments that we're proud of
We are really proud of exploring with Firebase to store and query our data. We found that using the HERE Map API was actually much more difficult than we originally thought. However, we are proud that we were able to implement it into our project.
## What we learned
We learned how to add and query data with Firebase. Also we learned how to use the HERE Map API, map real-time routes, and use GPS tracking. 
## What's next for BikeHail
BikeHail has a lot of room for growth. Since bike hailing is estimated to be 40% cheaper than car travel, it can be used for cheaper travel between closer destinations. Applications in tourism hold a lot of promise. In the future, we hope to continue refining our site and adding new features such as connecting Paypal API and Apple Pay API to process transactions, encourage biking with statistics on reduced CO2 emissions, and provide more language support.
