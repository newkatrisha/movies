const initState = {
    lists: [
        {id: '1', title: 'My new list', description: 'blah blah blah'},        
        {id: '2', title: 'Best films for me', description: 'blah blah blah'},        
        {id: '3', title: 'Movies time', description: 'blah blah blah'}        
    ]
}

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LIST':
            console.log('created list', action.list);
            return state;
        case 'CREATE_LIST_ERROR':
            console.log('create list error', action.err);
            return state;
        default:
            return state;
    }
}

export default listReducer;