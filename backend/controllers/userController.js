
// Route for user login
const loginUser = async(req,res) => {
    res.json({msg: "Login API Working"});
}

//Route for user register
const registerUser = async (req,res) => {
    res.json({msg:" Register API Working "})
}

// Route for admin login

const adminLogin = async (req,res) =>{
    res.json({msg: "Admin Login API Working"});
}

export{loginUser,registerUser,adminLogin}