const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema ({
        file_name: {
            type: String,
            require: true,
        },
        file_id: {
            type: String
        },
        version: {
            type: String
        },
        createdAt: {
            type: Date
        },
        modifiedAt: {
            type: Date
        },
        versionKey: false
});
// Create new fileSchema document
fileSchema.statics.create = function (payload) {
    // this === Model
    const fileSchema = new this(payload);

    // return Promise
    return fileSchema.save();
};

// Find All
fileSchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
};

// Find One by Fileid
fileSchema.statics.findOneByFile_id = function (file_id) {
    return this.findOne({ file_id });
};

// Update by todoid
fileSchema.statics.updateByFile_id = function (file_id, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ file_id }, payload, { new: true });
};

// Delete by todoid
fileSchema.statics.deleteByFile_id = function (file_id) {
    return this.remove({ file_id });
};


module.exports = mongoose.model("Files",fileSchema);

