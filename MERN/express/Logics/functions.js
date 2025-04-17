const UserModel = require("../Collections/UserModel")

let Functions = {
    Home: async function (req, res) {
        res.send("<h1>Home Page</h1>")
        res.end()
    },
    Contact: async function (req, res) {
        res.send("<h1>Contact Page</h1>")
        res.end()
    },
    Feedback: async function (req, res) {
        res.send("<h1>Feedback Page</h1>")
        res.end()
    },
    Help: async function (req, res) {
        res.send("<h1>Help Page</h1>")
        res.end()
    },
    Faqs: async function (req, res) {
        res.send("<h1>Faqs Page</h1>")
        res.end()
    },
    PrivacyPolicy: async function (req, res) {
        res.send("<h1>Privacy Policy Page</h1>")
        res.end()
    },
    saveData: async function (req, res) {
        try {
            let userGiveData = new UserModel(req.body);
            let saving = await userGiveData.save()
            res.status(201).json({ message: "Data Saved Successfully", data: saving });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    },
    healthSaveData: async function (req, res) {
        try {
            let userGiveData = new healthInfo(req.body);
            let saving = await userGiveData.save()
            res.status(201).json({ message: "Data Saved Successfully", data: saving });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = Functions

