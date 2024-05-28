const express = require("express")
const routes = require("./routes")

class App {
    constructor(){
        this.app = express()

        this.middewares()
        this.routes()
    }

    middewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(routes)
    }  
}

module.exports = new App().app