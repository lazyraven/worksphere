import express from 'express';

const router = express.Router();
router.get('/', (req, res)=>{
res.json({
    success: true,
    message: "WorkSphere backend connected",
    version: "1.0.0"
})
})
export default router;