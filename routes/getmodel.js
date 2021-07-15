var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json({
    "messs": true
  })
});

// router.post('/Models', function(req, res) {
//   res.send('respond with a resource');
//   //models path create
// });
// router.get('/:id', function(req, res) {
//   res.status(200).json({
//
//     "success": true
//   })
//   console.log(req.params.id);
//   // res.send('respond with a resource');
// });

router.get('/models/:id', function(req, res) {
  res.status(200).json({

    "success": true
  })
  console.log(req.params.id);
  // res.send('respond with a resource');
});

module.exports = router;
