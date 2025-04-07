import validator from "validator";

const validateSignupData = (req) => {
    const {firstName, lastName, email, password} = req.body;
    if(!firstName  && !lastName) {
        throw new Error("Name is not valid");
    }
    else if(firstName.length < 4 || firstName.length > 50) {
        throw new Error("Name length should be between 3 and 50");
    }

    else if(!validator.isEmail(email)){
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong enough");
    }
};
export default validateSignupData;