# Algos Shop

Algos is a full-stack  e-commerce application, built using React for the frontend, Node and Express for the backend, and a MongoDB for the database. It is based on the MERN stack ecommerce course from Udemy by Brad Traversy, but contains my own modifications, and I aim to include more features and functionality in the future, too.

## Initial setup

To run Algos in your local environment, first clone the repo to a directory of your choosing, and change directory into it.
```
cd algos_shop
```
Create a file called ".env" here, and copy the following into it:
```
NODE_ENV = development 
PORT = 5000
MONGO_URI = **your mongoDB URI**
JWT_SECRET = 123456
```
For the Mongo URI, set its value to the URI you use to connect to your MongoDB (either running in your local environment or in MongoDB Atlas - be sure to have one of these options set up beforehand if you have not already done so). 

## Backend setup

To start the backend, first install its dependencies from the root of the repo 
```
npm i
```
To start the backend server with nodemon: 
```
npm run server
```
You can make a GET request to the API at http://localhost:5000/api/products/ (using a REST client, such as Postman), and GET a particular product by appending its ID to this URI. 

## Frontend setup

To start the frontend, first change directory into the frontend directory 
```
cd frontend
```
and install the dependencies using npm 
```
npm i
```
then run the frontend:
```
npm run start
```
The frontend will be running on http://localhost:3000/.

## Development 

You can run both the backend and frontend together concurrently using the following command:
```
npm run dev
```

## Data insertion and deletion

There are scripts included to insert and delete data into the database. These scripts work with whatever data there is (in JSON format) in the seeder file, located in the root of the backend directory. 

To insert the data in this file into the database, run the following command from the root of the project
``` 
npm run data:import
```
To delete whatever data there is in your database, run the following command from the root of the project
```
npm run data:destroy
```
NB: Since the inserts are connected to your database file, you will need to have set up your database connection with a .env file as mentioned in the *intial setup* section above. 

Also: You will have to refresh your browser while running the frontend to see the data populate the application after inserting the data (for example, if you running the development command in a different terminal tab, e.g. by running *npm run dev* as mentioned above). 
