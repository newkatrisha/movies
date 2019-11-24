export const createList = (list) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('movieList').add({
       ...list,
       authorFirstName: 'Andrey',
       authorLastName: 'Khaykin',
       authorId: 12345,
       createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_LIST', list })
    }).catch((err) => {
      dispatch({ type: 'CREATE_LIST_ERROR', err})
    })
   }
}; 