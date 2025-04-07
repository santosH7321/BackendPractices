import validator from "validator";

const validateInput = (data) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) {
    throw new Error("All fields are required");
  } else if (name.length < 4 && name.length > 50) {
    throw new Error("Name length should be between 4 and 50");
  } else if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }
};
export default validateInput;
