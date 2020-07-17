const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use('/', htmlRoute);
app.use('/api/notes', apiRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));