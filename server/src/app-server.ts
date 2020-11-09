import express, {Request, Response} from "express"
import main from "./index"

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});