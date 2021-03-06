
import {findAllCourses} from './queries/findAllCourses';
import * as express from 'express';
import {Application} from 'express';
import {initRestApi} from './api/api';
import {apiErrorHandler} from './api/apiErrorHandler';

const app: Application = express();

initRestApi(app);

app.use(apiErrorHandler);

app.listen(8090, () => {
    console.log('server is running on port 8090...');
});