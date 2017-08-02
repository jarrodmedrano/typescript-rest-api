
import {findAllCourses} from './queries/findAllCourses';
import * as express from 'express';
import {Application} from 'express';
import {initRestApi} from './api/api';

const app: Application = express();

initRestApi(app);

app.use((err, req, res) => {
    console.log('middleware executed');
});

app.listen(8090, () => {
    console.log('server is running on port 8090...');
});