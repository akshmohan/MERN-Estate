import express from "express";

const router = express.Router();

router.get("/test", (_req, res) => {
    res.send("Hello Test");
});

export default router;