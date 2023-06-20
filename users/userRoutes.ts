import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/signup", (req: Request, res: Response) => {
    res.send('ശുദ്ധ ഹാസ്യം മരിച്ചിട്ടില്ല');
});


router.post("/login", ()=>{});

module.exports = router;
