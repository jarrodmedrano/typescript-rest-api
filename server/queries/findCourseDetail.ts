
import {CourseModel, LessonModel} from '../model/model';

//return model with course
export function findCourseDetail(courseId: number) {

    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    });

}