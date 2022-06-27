import {configureStore} from '@reduxjs/toolkit';

import authSlicer from '../store/authSlicer.js/authSlicer';
import taskSlicer from '../store/taskSlicer/taskSlicer';
// import userSlicer from '../store/userSlicer/userSlicer';

const reducer = {
  auth: authSlicer,
  // userFetchRed: userSlicer,
  taskRed: taskSlicer
};

const Store = configureStore({
  reducer,
});

export default Store;