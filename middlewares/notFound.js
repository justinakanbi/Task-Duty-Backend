// a middleware in backend development is like a middle man  that sits between the incoming request from a clientb amd the final response from the server. it's a function that can modify the request, process it, handle certain tasks before passing it on to the next part of the code or sending back a response

const notFound =(req, res) => {
    res.json({message: "Route not found"})
}

module.exports = notFound