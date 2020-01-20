const INIT_STATE = {
    single_city_data: {
        location: {},
        forecast: [],
        loading: false
    }
}
const infodump = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                single_city_data: {
                    ...state.single_city_data,
                    loading: true
                }
            }
        case 'FETCH_COMPLETE':
            return {
                ...state,
                single_city_data: {
                    ...state.single_city_data,
                    location: action.location,
                    forecast: action.forecast,
                    loading: false
                }
            }
        default:
            return state;

    }
}

export default infodump;