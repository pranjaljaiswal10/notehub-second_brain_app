import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import authRouter from "./routes/user.route";
import connectDB from "./db/index";
import contentRouter from "./routes/content.route";
import shareRouter from "./routes/share.route";

dotenv.config({
  path: "./.env",
});

const app = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan(morganFormat));

app.use("/api/v1/users", authRouter);
app.use("/api/v1/content",contentRouter)
app.use("api/v1/share",shareRouter)



const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB connection FAILED! ${err}`);
  });
