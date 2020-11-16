import express, {Request, Response} from "express"
import main from "./index"
import mongoose from "mongoose"
import getData from "./repositories/data-provider"
import models, { connectDb } from "./models"
import BehaviourFeedbackFinder from "./services/behaviour-feedback-finder"
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

let behaviourFeedbackFinder

app.get("/", (req: Request, res: Response) :void => {
    res.render("index")
});

app.get("/behaviours", (req: Request, res: Response) :void => {
  res.send(behaviourFinder.team[0])
});

app.set("title", "Feedback Tool")
app.set("view engine", "pug")
app.set("views", "./out/views")

app.use(express.static("public"))

connectDb().then(async () => {
  behaviourFinder = new BehaviourFinder
  behaviourFeedbackFinder = new BehaviourFeedbackFinder
  app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`))
})