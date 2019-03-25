const initState = {
    projects: [
        {id: 1, title: 'Title One', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 2, title: 'Title Two', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 3, title: 'Title Three', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 4, title: 'Title Four', content: 'Blah Blah Blah BlahBlah Blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer