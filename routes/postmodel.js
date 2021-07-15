var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/Models', function(req, res) {
// console.log(req);
    console.log("post");
    // console.log(req.is)
    console.log(req.body);
    // models path create
    console.log(req.path);
    res.status(200);
    res.send(200);
});

// router.post('/Models/:id', function(req, res) {
//
//
//   res.status(200);
//   console.log("post");
//   console.log(req.params.id);
//   console.log(req.params.body);
//   // models path create
// });



module.exports = router;
