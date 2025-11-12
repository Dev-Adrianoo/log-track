import express from "express"
import Routes  from "./routes"

const app = express()

app.use(json.express());
app.use('/api', Routes);

app.get('/', (req, res) => {
    res.send("Rodando!")
})

app.listen(3000, () => {
    console.log("Server rodando on: ")
})