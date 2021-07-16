var createError = require('http-errors');

var express = require('express');
var router = express.Router();
var data = [];
/* GET users listing. */
router.post('/', async (req, res) => {
    // res.send("connect!");
    //라우터 붙이기
    //db 붙이기
    //
    // console.log(req.body);
    data.push(req.body);
    console.log(data)
    res.json(data);
})

router.put('/:model_id', async (req, res) => {

    let model_id = req.params["model_id"];
    let arr = data.map(data => {

        if(data.id != model_id)
            // data.name = name
            data.id = model_id;
            console.log(model_id);

        return {
            id: data.id,

        }
    })
    // if(req.params["model_id"] == id){
    //     console.log("ok");
    // }
    //db에 쿼리 요청을 통해 해당 id에 맞는 데이터를 불러와 수정을 함 or 해당 디렉토리의 수정 과정을 거침
    //수정 model name
    // platform name 수정
    // verison 수정
    // model file수정?
    res.json(data);
});


router.delete('/:model_id', async (req, res) => {
    // const user_id = req.query.user_id
    let model_id = req.params["model_id"];
    //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
    const user = data.filter(data => data.id != model_id );
    console.log(user);
    data = user;
    res.send(200);
})

router.get('/', async (req, res) => {
    // res.send("connect!");
    res.send(data);

});

router.post('/:file_id', async (req,res)=>{

});


router.use(function(req, res, next) {
  // next(createError(404));
});
//
// // error handler
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = router;
