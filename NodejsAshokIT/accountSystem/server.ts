import * as express from "express";
import account from "./account";
import transaction from "./transaction";
import cards from "./cards";

const app:any = express();

app.use("/account", account);
app.use("/transaction", transaction); 
app.use("/cards", cards);

const PORT:number = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port no. ${PORT}`);
})