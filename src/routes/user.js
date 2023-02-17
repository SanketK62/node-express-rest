import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
  //return res.send("All the users data is unavailable right now");
});

router.get('/:userId', (req, res) => {
  let m = req.context.models.users[req.params.userId];
  //console.log(typeof m);
  //console.log(m);
  return res.send(m)
  //return res.json({"id":m["id"]});
  //return res.json(m["id"]);
  //return res.send("2");
});

export default router;