const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send("This is home router");
})
router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { username, contact, gender, email, password } = req.body;
    if (!username || !contact || !gender || !email || !password) {
        return res.status(400).json({ error: "Please Fill all the details!" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "User already Registerd!" });
        }
        else {
            const user = new User({ username, contact, gender, email, password });
            await user.save();
            return res.status(200).json({ message: "Successfull Registration" });
        }
    }
    catch (err) {
        res.status(400).json({ error: "Failed Registration" });
        console.log(err);
    }

});
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send("Fill the details first");
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
        return res.status(200).json({ message: "Login successfull" });
    }
    else {
        return res.status(404).json({ error: "Not found" });
    }
})

router.post('/pay', async (req, res)=>{
    
})

module.exports = router;