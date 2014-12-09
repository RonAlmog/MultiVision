var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        //db: 'mongodb://localhost/multivision',
        //port: process.env.PORT || 3030
        
        db: 'mongodb://mongodbuser:multiron@ds053370.mongolab.com:53370/multiron',
        port: process.env.PORT || 80
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://mongodbuser:multiron@ds053370.mongolab.com:53370/multiron',
        port: process.env.PORT || 80

    }

};