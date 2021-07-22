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

router.post('/', async (req, res) => {
    let res_pars = req.body["ts:ml"];
    if(!res_pars.hasOwnProperty("model_id")){
        res_pars.model_id = "ts"+ res_pars.model_name
    }
    let db_res = {};
    let model_res = new Models({
        model_name: res_pars.model_name,
        platform: res_pars.platform,
        model_id: res_pars.model_id,
        version: res_pars.version,
    })
    // var test = Models.findById(res_pars.model_id);
    // // console.log(test);
    // console.log(test._id);
    Models.create(model_res)
        .then(models => res.send(models))
        .catch(err => res.status(500).send(err));


    // console.log(model_res);
    // // modelSchema.statics.findOneByModel_id = function (model_id) {
    // //     return this.findOne({ model_id });
    // // };
    // try{
    //     db_res = await model_res.save();
    //     res.status(201).json({message:"Model creatd"});
    // }catch (err) {
    //     console.log(err);
    // }

    // try{
    //     const { model_id } = req.body;
    //     let cin
    //     console.log(model_id);
    //     if(model_id === ""){
    //
    //         //model id 생성
    //     }
    //     else{
    //         // const model_name  = await models.findOne({model_id});
    //         // if(model_name) errorGenerator("Model_ID가 중복됩니다. 다시 생성해주세요", 404);
    //         //
    //         // await creatmodelsData(req.body);
    //         // console.log(model_name);
    //
    //     }
    //
    // }catch (err) {
    //     console.log("123");
    //     // next(err);
    //
    // }

    //라우터 붙이기
    //db 붙이기
    //
    // console.log(req.body);
    // data.push(req.body);
    // console.log(data)
    // res.json(data);
})

// router.put('/:model_id', async (req, res) => {
//
//     let model_id = req.params["model_id"];
//     let arr = data.map(data => {
//
//         if(data.id != model_id)
//             // data.name = name
//             data.id = model_id;
//             console.log(model_id);
//
//         return {
//             id: data.id,
//
//         }
//     })
//     // if(req.params["model_id"] == id){
//     //     console.log("ok");
//     // }
//     //db에 쿼리 요청을 통해 해당 id에 맞는 데이터를 불러와 수정을 함 or 해당 디렉토리의 수정 과정을 거침
//     //수정 model name
//     // platform name 수정
//     // verison 수정
//     // model file수정?
//     res.json(data);
// });
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
router.get('/:model_id', async (req, res) => {
    let model_id = req.params["model_id"];
    // let models = {};
    let models = await Models.findOne({model_id});
    console.log(models.__id);
    console.log(models._id);
    console.log(models[0]._id);
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
// router.use(function(req, res, next) {
//   // next(createError(404));
// });
// //
// // // error handler
// router.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   // res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   // res.status(err.status || 500);
//   // res.render('error');
// });

module.exports = router;
