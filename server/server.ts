
import {findAllCourses} from './queries/findAllCourses';

findAllCourses().then(results => console.log(JSON.stringify(results)));

console.log('Server is running...');