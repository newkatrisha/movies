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

 export const likeMovie = (movie) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    //  make async call to database
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userId = getState().firebase.auth.uid;
    const userRef = firestore.collection('users').doc(userId);
    const ratedMovies = getState().firebase.profile.ratedMovies;

    ratedMovies && ratedMovies.forEach(element => {
      if(movie.id === element.movie) {
        userRef.update({
          ratedMovies: firebase.firestore.FieldValue.arrayRemove(element)
        })
      }
    })
    
    userRef.update({
      ratedMovies: firebase.firestore.FieldValue.arrayUnion({
        id: movie.id,
        state: 1
      })
  }).then(() => {
    dispatch({ type: 'LIKED_MOVIE', movie })
  }).catch((err) => {
    dispatch({ type: 'LIKE_MOVIE_ERROR', err })
  })  
  
  // let json = require('/Users/vishnya/Documents/movies2/src/final_metadata_new_4.json');
  // //   //  i < 9124
  // for (let i = 0; i < 9124; i++) {
  //   firestore.collection('movies').add({
  //       movieId: json.movieId[i],
  //       title: json.title[i],
  //       genres: json.genres[i],
  //       poster: json.poster[i].slice(2,-2),
  //       rating_imdb: json.rating_imdb[i].slice(2, -2),
  //       summary_text: json.summary_text[i].slice(5,-5).replace(/\\n/g, ''),
  //       // writers: json.writers[i].slice(1,-1).replace(/'/g, '').split(","),
  //       stars: json.stars[i].slice(1, -1).replace(/'/g, '').split(","),       
  //       countries: json.countries[i].slice(1,-1).replace(/'/g, '').split(","),
  //       languages: json.languages[i].slice(1,-1).replace(/'/g, '').split(",")          
  //       }).then(
  //         firestore.collection("movies").get()
  //         .then(querySnapshot => {
  //           const data = querySnapshot.docs.map(doc => doc.data());
  //           console.log(data);
  //         })
  //       ).catch((error) => {
  //           console.log("Error adding document: ", error);
  //       })
    // }
  }
};

export const dislikeMovie = (movie) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
  //  make async call to database
  const firestore = getFirestore();
  const firebase = getFirebase();
  const userId = getState().firebase.auth.uid;
  const userRef = firestore.collection('users').doc(userId);
  const ratedMovies = getState().firebase.profile.ratedMovies;

  ratedMovies && ratedMovies.forEach(element => {
    if(movie.id === element.movie) {
      userRef.update({
        ratedMovies: firebase.firestore.FieldValue.arrayRemove(element)
      })
    }
  })
  
  userRef.update({
    ratedMovies: firebase.firestore.FieldValue.arrayUnion({
      id: movie.id,
      state: 0
    })
}).then(() => {
  dispatch({ type: 'DISLIKE_MOVIE', movie })
}).catch((err) => {
  dispatch({ type: 'DISLIKE_MOVIE_ERROR', err })
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
