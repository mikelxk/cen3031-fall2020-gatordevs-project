import { join } from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import userRouter from "../routes/userRoute.js";
import express from "express";
async function getUri() {
  return import("./config.js")
    .then(config => config.db.uri)
    .catch(process.env.DB_URI);
}
const uri = await getUri();
export function init() {
  /* 
        connect to database
        - reference README for db uri
    */
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  // initialize app
  const app = express();

  // enable request logging for development debugging
  app.use(morgan("dev"));

  // body parsing middleware
  app.use(express.json());

  // add a router
  app.use("/api/users", userRouter);

  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(join(__dirname, "../../client/build")));

    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
      res.sendFile(join(__dirname, "../../client/build", "index.html"));
    });
  }

  return app;
}
