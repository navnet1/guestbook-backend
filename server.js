const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.post("/messages", (req, res) => {
    messages.push(req.body.message);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Server running");
});

app.delete("/messages", (req, res) => {
    messages = [];
    res.json({ success: true });
});