const INIT_STATE = {
    form: {
        cities: [],
        loading: true
    }
}
const form = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    cities: action.payload.cities,
                    loading: false
                },

            }
        
        default:
            return state
    }
}

export default form