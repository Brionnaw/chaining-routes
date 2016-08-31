  import express = require('express');
  let router = express.Router();
    router.get("/fantasy", ((req, res ) => {
      res.send("The Final Fantasy");
    }))
    router.get("/action", ((req, res ) =>{
      res.send("Fast n Furious");
    }));

    export = router;
