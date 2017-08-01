"use strict";
exports.__esModule = true;
var ORM = require("Sequelize");
var dbUrl = 'postgres://jarrodmedrano:pwnDB@localhost:5432/complete-typescript-course';
var sequelize = new ORM(dbUrl);
var CourseModel = sequelize.define('Course', {
    description: ORM.STRING,
    url: ORM.STRING,
    longDescription: ORM.TEXT,
    iconUrl: ORM.STRING,
    courseListIcon: ORM.STRING,
    seqNo: ORM.INTEGER,
    comingSoon: ORM.BOOLEAN,
    isNew: ORM.BOOLEAN,
    isOngoing: ORM.BOOLEAN
});
CourseModel.findAll()
    .then(function (results) { return console.log(JSON.stringify(results)); });
console.log('Server is running...');
