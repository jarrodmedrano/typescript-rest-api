
import {CourseModel} from './model/model';

CourseModel.findAll({
    order: ['seqNo']
})
.then(results => console.log(JSON.stringify(results)));

console.log('Server is running...');