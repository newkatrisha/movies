export const addMovie = (movie) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    //  make async call to database
     const firestore = getFirestore();
     const firebase = getFirebase();
     const userId = getState().firebase.auth.uid;
     const userRef = firestore.collection('users').doc(userId);
     
      userRef.update({
        movies: firebase.firestore.FieldValue.arrayUnion(movie)
      }).then(() => {
       dispatch({ type: 'ADD_MOVIE', movie })
     }).catch((err) => {
       dispatch({ type: 'ADD_MOVIE_ERROR', err })
     })
    }
 };

 export const deleteMovie = (movie) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    //  make async call to database
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userId = getState().firebase.auth.uid;
    const userRef = firestore.collection('users').doc(userId);
    
      userRef.update({
        movies: firebase.firestore.FieldValue.arrayRemove(movie)
      }).then(() => {
      dispatch({ type: 'DELETE_MOVIE', movie })
    }).catch((err) => {
      dispatch({ type: 'DELETE_MOVIE_ERROR', err })
    })
  }
 };

//  export const compareMovie = (movie) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     //  make async call to database
//     const firestore = getFirestore();
//     const firebase = getFirebase();
//     const user = getState().firebase.auth;
//     const userRef = firestore.collection('users').doc(userId);
    
//       userRef.update({
//         movies: firebase.firestore.FieldValue.arrayRemove(movie)
//       }).then(() => {
//       dispatch({ type: 'DELETE_MOVIE', movie })
//     }).catch((err) => {
//       dispatch({ type: 'DELETE_MOVIE_ERROR', err })
//     })
//   }
//  }