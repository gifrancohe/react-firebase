const initState = {
    projects: [
        {id: 1, title: 'Title One', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 2, title: 'Title Two', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 3, title: 'Title Three', content: 'Blah Blah Blah BlahBlah Blah'},
        {id: 4, title: 'Title Four', content: 'Blah Blah Blah BlahBlah Blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer