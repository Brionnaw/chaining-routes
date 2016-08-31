  import express = require('express');
  let app = express();
  app.route("/")
  .get(function(req, res){
    res.send('im a GET');
  })
  .post(function(req, res)  {
    res.send('hello');
  })
  .put(function(req, res) {
    res.send('I am a PUT');
  })
  .delete(function(req, res)  {
    res.send('i am a DELETE');
  });

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
