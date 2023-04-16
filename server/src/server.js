const exress = require("express");
const morgan = require("morgan");
const userRoute = require("./route/user");
const cors = require("cors");
const app = exress();

const port = 5500;


 

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is Runing!! ");
});

app.use("/api", userRoute);

app.listen(port, () => {
  console.log(
    `Server is Runing on PORT ${port} Click to http://localhost:${port}/`
  );
});
