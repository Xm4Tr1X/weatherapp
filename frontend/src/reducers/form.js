const INIT_STATE = {
    form: {
        cities: [],
        loading: true
    }
}
const form = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_FORM':
            console.log('state =>', state);
            return {
                ...state,
                form: {
                    ...state.form,
                    cities: action.payload,
                    loading: false
                },
            }
        
        default:
            return state
    }
}

export default form