import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);

  //return res.json({"id":req.context.models.users[req.context.me.id]["id"]});

  //return res.send("current session id is "+req.context.models.users[req.context.me.id]["id"]);
});

export default router;
