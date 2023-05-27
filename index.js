const express = require('express')
const app = express();
app.use(express.static('public'))
const server_message = () => {
    console.log("server started")
}
app.listen(4000, server_message)