const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(
  cors({
    methods: ["POST", "GET"],
    origin: "https://bible-api.com/?random=verse",
    credentials: true,
  })
);

// app.get('/api/random-verse', async (req, res) => {
//   try {
//     const response = await axios.get('https://bible-api.com/?random=verse');
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend origin
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching verse:', error);
//     res.status(500).send('Error fetching verse');
//   }
// });



const AllUserRoutes = require("./routes/user.routes");
AllUserRoutes(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));
