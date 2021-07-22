const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema ({
    model_name: {
        type: String,
        require: true,
    },
    platform: {
        type: String,
        require: true,
    },
    model_id: {
        type: String,
    },
    version: {
        type: Number,
    },
    createdAt: {
        type: String,
    },
    modifiedAt: {
        type: String,
    },
},
{
        versionKey: false

});
// Create new modelSchema document
modelSchema.statics.create = function (payload) {
    // this === Model
    const modelSchema = new this(payload);

    // return Promise
    return modelSchema.save();
};

// Find All
modelSchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
};

// Find One by todoid
modelSchema.statics.findOneByModel_id = function (model_id) {
    return this.findOne({ model_id });
};

// Update by todoid
modelSchema.statics.updateByModel_id = function (model_id, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ model_id }, payload, { new: true });
};

// Delete by todoid
modelSchema.statics.deleteByModel_id = function (model_id) {
    return this.remove({ model_id });
};


module.exports = mongoose.model("Models",modelSchema);