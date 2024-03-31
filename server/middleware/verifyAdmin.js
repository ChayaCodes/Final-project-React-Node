
const verifyAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next()
    } else {
        res.status(401).json({ message: "unauthorized - admin only" })
    }
}

module.exports = verifyAdmin;