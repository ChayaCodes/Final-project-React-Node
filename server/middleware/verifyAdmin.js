const verifyAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "unauthorized - not an admin" });
    }
    next();
}