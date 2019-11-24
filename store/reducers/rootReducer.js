 import authReducer from './authReducer';
 import listReducer from './listReducer';
 import movieReducer from './movieReducer';
 import { combineReducers } from 'redux';
 import { firestoreReducer } from 'redux-firestore';
 import { firebaseReducer } from 'react-redux-firebase';

 const rootReducer = combineReducers({
     auth: authReducer,
     list: listReducer,
     movie: movieReducer,
     firestore: firestoreReducer,
     firebase: firebaseReducer
 });

 export default rootReducer;