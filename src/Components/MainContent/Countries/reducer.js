import { GET_ALL_COUNTRIES, GET_REGION_COUNTRIES, GET_NAME_COUNTRIES } from "./constants"

export const initState = {
    countries: null
}

const reducer = (state, action) => {

    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { countries: action.payload }
        case GET_REGION_COUNTRIES:
            return { countries: action.payload }
        case GET_NAME_COUNTRIES:
            return { countries: action.payload }
        default:
            return state
    }
}

export default reducer