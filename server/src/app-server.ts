import express, {Request, Response} from "express"
import main from "./index"
import mongoose from "mongoose"
import getData from "./repositories/data-provider"
import models, { connectDb } from "./models"
import Behaviour from "./models/behaviours"
import BehaviourFinder from "./services/behaviour-finder"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  })
)

let behaviourFinder

app.get("/", (req: Request, res: Response) :void => {
    res.render("index")
});

app.get("/behaviours", (req: Request, res: Response) :void => {
  console.log("Got Here!")
  // console.log(behaviourFinder.team)
  res.send(behaviourFinder.team[0])
  // res.send({data: "This is a test"})
});


app.set("title", "Feedback Tool")
app.set("view engine", "pug")
app.set("views", "./out/views")

app.use(express.static("public"))

connectDb().then(async () => {
  behaviourFinder = new BehaviourFinder
  app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`))
})