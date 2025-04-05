export const adminAuth = (req, res, next) => {
    const tocken = "xyz";
    const isTockenisauthorized = tocken === "xyz";
    if(!isTockenisauthorized){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }
};
export const userAuth = (req, res, next) => {
    const tocken = "xyz";
    const isTockenisauthorized = tocken === "xyz";
    if(!isTockenisauthorized){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }
};

