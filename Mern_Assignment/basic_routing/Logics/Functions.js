let Functions = {
    Registration : async function(req, res){
        res.send("<h1>Registration Page</h1>")
        res.end()
    },
    Login : async function(req, res){
        res.send("<h1>Login Page</h1>")
        res.end()
    },
    Dashboard : async function(req, res){
        res.send("<h1>Dashboard Page</h1>")
        res.end()
    }
}

module.exports = Functions

