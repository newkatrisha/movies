import { createSelector } from 'reselect';
import { sampleSize } from 'lodash';


// selector
const selectMovies = (state) => state.firestore.ordered.movies_new;

// reselect function
export const getMovies = createSelector(
    [ selectMovies ],
    movies => movies ? sampleSize(movies, 100) : null,
)

export const getForRate = createSelector(
    [selectMovies],
    movies => movies ? sampleSize(movies, 50) : null
)



















// const selectMovies = (state) => {
//     getFirestore().collection('movies_new').get().then(querySnapshot => {
//     const data = querySnapshot.docs.map(doc => doc.data());
//     return data;
// });
// }

// getFirestore().collection('movies_new').get().then(querySnapshot => {
    //     const data = querySnapshot.docs.where("title", "==", "toys").map(doc => doc.data());
    //     return data;