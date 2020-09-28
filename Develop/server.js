const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
const htmlRouter = require("./routes/htmlRouter");


const PORT = process.env.PORT || 8080;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);
app.use("/", htmlRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));