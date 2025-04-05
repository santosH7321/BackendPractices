import express from "express";

const app = express();


app.use("/admin", (req, res, next) => {
    const tocken = "xyz";
    const isTockenisauthorized = tocken === "xyz";
    if(!isTockenisauthorized){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }
});
app.get("/admin/getAlldata", (req, res) => {
    res.send("All data fetched successfully");
});

app.get("/admin/delete", (req, res) => {
    res.send("Data deleted successfully");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})