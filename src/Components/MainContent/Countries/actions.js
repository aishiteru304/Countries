import { GET_ALL_COUNTRIES, GET_REGION_COUNTRIES, GET_NAME_COUNTRIES } from "./constants"

export const GetAllCountries = payload => {
    return {
        type: GET_ALL_COUNTRIES,
        payload
    }
}

export const GetRegionCountries = payload => {
    return {
        type: GET_REGION_COUNTRIES,
        payload
    }
}

export const GetNameCountries = payload => {
    return {
        type: GET_NAME_COUNTRIES,
        payload
    }
}