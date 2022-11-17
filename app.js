import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status (200).send("Hallo");
});

app.listen(PORT, () => {
  console.log(`Server führt http://localhost:${PORT} aus`);
});
