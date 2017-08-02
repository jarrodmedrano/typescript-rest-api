import * as ORM from 'Sequelize';
import {Sequelize, LoggingOptions} from 'Sequelize';
import {initCourseModel} from './initCourseModel';
import {initLessonModel} from './initLessonModel';

const dbUrl = 'postgres://jarrodmedrano:pwnDB@localhost:5432/complete-typescript-course';

const options: LoggingOptions = {benchmark: true, logging:console.log};

const sequelize:Sequelize = new ORM(dbUrl);

export const CourseModel = initCourseModel(sequelize);

export const LessonModel = initLessonModel(sequelize);
//bidirectional relationship between two models in sequelize
CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'});
//retrieve course from the lesson
LessonModel.belongsTo(CourseModel, {foreignKey: ''});