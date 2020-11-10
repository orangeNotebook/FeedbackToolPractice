import express, {Request, Response} from "express"
import main from "./index"
import mongoose from "mongoose"
import getData from "./repositories/data-provider"
import models, {connectDb} from "./models"
import { connect } from "http2"
import Behaviour from "./models/behaviours"






const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let behaviour


app.get("/", (req: Request, res: Response) :void => {
    res.render("index");
});

app.get("/behaviours", (req: Request, res: Response) :void => {
  res.send(main());
});

app.set("title", "Feedback Tool");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

connectDb().then(async () => {
  behaviour = new Behaviour
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});