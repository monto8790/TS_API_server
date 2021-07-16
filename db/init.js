const config = require('config');
const mongoose = require('mongoose');
const db_config = config.get('db');
let db_url = '';
if (true === db_config.auth) {
  db_url = db_config.scheme + db_config.id + ':' + db_config.pw + '@' + db_config.host + ':' + db_config.port + '/' + db_config.name;
  console.log('connecting to the DB with authorization...');
} else {
  db_url = db_config.scheme + db_config.host + ':' + db_config.port + '/' + db_config.name;
  console.log('connecting to the DB without authorization...');
}

exports.init_db = async function () {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }).catch(err => console.log(err.message));

    // if there's no <cb> resource, then create it
    // const cb_res = await cb.CB.findOne({ ty: 5 }, { _id: true });
    // if (null == cb_res) {
    //   const cb_ri = await cb.create_a_cb();
    //
    //   // create the default <acp> resource and put it into acpi of <cb> resource
    //   if (true == await create_default_acp(cb_ri)) {
    //     console.log('successfully created the default <acp> resource and put into acpi of <cb> resource');
    //
    //   }
    //   else {
    //     console.log('error occured during default acp creation for <cb> resource');
    //   }
    // } else {
    //   console.log('\n<cb> resource already exists with ri: ', cb_res._id);
    // }
  }
  catch (err) {
    console.error(err);
  }

}
