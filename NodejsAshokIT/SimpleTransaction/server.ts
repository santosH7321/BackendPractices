import * as express from "express";
import account from "./account";
import transaction from "./transaction";

const server:any = express();

server.use("/ac", account);
server.use("/trx", transaction);


const PORT:Number = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://locahost:${PORT}`);
})