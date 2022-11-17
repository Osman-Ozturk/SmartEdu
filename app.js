import express from "express";

const app = express();
const PORT = 3000;


// Template Engine 
app.set('view engine','ejs')

// Middlewares
app.use(express.static('public'))


app.get("/", (req, res) => {
  res.status (200).render("index",{page_name:"index"});
});
app.get("/about", (req, res) => {
        res.status (200).render("about",{page_name:"about"});
      });

app.listen(PORT, () => {
  console.log(`Server führt http://localhost:${PORT} aus`);
});
