const INIT_STATE = {
    city_list: {
        data: [],
        loading: false
    }
}
const infodump = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_INFO':
            return {
                ...state,
                city_list: {
                    ...state.city_list,
                    loading: true
                }
            }
        case 'FETCH_COMPLETE':
            return {
                ...state,
                city_list: {
                    ...state.city_list,
                    data: action.payload,
                    loading:false
                }
            }
        default:
            return state;

    }
}

export default infodump;