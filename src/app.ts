import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use(cors());
        this.express.use(bodyParser.json({limit: "10mb"}));
        this.express.use(bodyParser.urlencoded({extended: true, limit: "10mb"}));
        this.express.use(bodyParser({type: "application/vnd.api+json"}));
    }
}

export default new App().express;
