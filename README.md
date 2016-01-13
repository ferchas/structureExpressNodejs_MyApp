# Estructure Express and Nodejs MyApp

Node and Express don’t come with a strict file and folder structure. Instead, you can build your web app any way you like. This is great, especially for small apps. It is easy to start, learn and experiment.

controllers/ – defines your app routes and their logic

helpers/ – code and functionality to be shared by different parts of the project

middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes

models/ – represents data, implements business logic and handles storage

public/ – contains all static files like images, styles and javascript

views/ – provides templates which are rendered and served by your routes

tests/ – tests everything which is in the other folders

app.js – initializes the app and glues everything together 

package.json – remembers all packages that your app depends on and their versions
