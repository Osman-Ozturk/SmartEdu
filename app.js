import express from "express";
import mongoose from "mongoose";
import pageRoute from './routes/pageRoute.js'
import courseRoute from './routes/courseRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import errorHandler from "./middleware/errorHandle.js";
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/smartedu-db').then(()=> console.log('DB Connected Successfuly'));
// Template Engine 
app.set('view engine','ejs')

// Middlewares
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


// Routes
app.use('/',pageRoute)
app.use('/courses',courseRoute)
app.use('/categories',categoryRoute)


//Fehlerbehandlung middleware

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server führt http://localhost:${PORT} aus`);
});
