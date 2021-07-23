var createError = require('http-errors');

var express = require('express');
var router = express.Router();
var data = [];
var fileUpload = require('express-fileupload');
/* GET users listing. */

const Models = require("../db_models/model_schema");
const Files = require("../db_models/file_schemal");

// const creatmodelsData = async(infoInput) =>{
//     const info = await cr_models(infoInput);
//     return info.save();
// };

// const errorGenerator = (message, statusCode = 500) => { // error 를 핸들링 하는 함수
//     const error = new Error(message); // error 객체를 생성
//     error.statusCode = statusCode;
//     throw error; // error 를 핸들링 하는 하는 미들웨어로 에러를 던진다.
// };
function bodychecker(body){


}
router.post('/', async (req, res, next) => {
    if(req.body.hasOwnProperty("ts:ml")){
    let res_pars = req.body["ts:ml"];

    if(!res_pars.hasOwnProperty("model_id")){
        res_pars.model_id = "ts"+ res_pars.model_name
    }
    let model_res = new Models({
        model_name: res_pars.model_name,
        platform: res_pars.platform,
        model_id: res_pars.model_id,
        version: res_pars.version,
    })
    let model_id = res_pars.model_id;
    Models.findOneByModel_id(model_id)
        .then((models) => {
            if (!models){
                Models.create(model_res)
                    .then(models => res.status(200).send(models))
                    .catch(err => res.status(500).send(err));
                // return res.status(404).send({ err: 'models not found' });
                // res.send(`findOne successfully: ${models}`);
            }
            else{
                res.status(409).send({ err: 'MODELS INFO CONFLICT' });
                // res.send(`MODELS INFO CONFLICT: ${models}`);
            }
        }).catch(err => res.status(500).send(err));
    }
    else{
        res.status(400).send({err:'BAD REQUEST'});
    }
    // next(err);
})

router.put('/:model_id', async (req, res) => {


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
//
//
// router.delete('/:model_id', async (req, res) => {
//     // const user_id = req.query.user_id
//     let model_id = req.params["model_id"];
//     //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
//     const user = data.filter(data => data.id != model_id );
//     console.log(user);
//     data = user;
//     res.send(200);
// })
//
router.get('/:model_id', async (req, res,next) => {
    // console.log(req.params);
    let model_id = req.params["model_id"];
    // let models = {};
    console.log(model_id);
    let models = await Models.find({model_id});
    // console.log(models)
    // console.log(models.__id);
    console.log(models);
    // console.log(models[0]._id);
    // if(err) return res.status(500).send({error:"datbase faillure"});
    res.json(models);
});
//
// // router.post('/:file_id', async (req, res) => {
// //     try {
// //         if(!req.files) {
// //             res.send({
// //                 status: false,
// //                 message: 'Error: No file uploaded'
// //             });
// //         } else {
// //             let uploadedFile = req.files.uploadedFile;
// //             uploadedFile.mv('./upload/' + uploadedFile.name);
// //             res.json({
// //                 message: 'File is uploaded',
// //                 data: {
// //                     name: uploadedFile.name,
// //                     mimetype: uploadedFile.mimetype,
// //                     size: uploadedFile.size
// //                 }
// //             });
// //         }
// //     } catch (err) {
// //         res.json({Error: "Error while uploading file."})
// //     }
// // });
//
//
/*router.use(function(req, res, next) {
  next(createError(404));
});
// //
// // error handler
router.use(function(err, req, res, next) {
  set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = router;
