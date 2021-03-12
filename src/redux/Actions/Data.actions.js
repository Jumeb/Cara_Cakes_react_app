import { SET_BAKERS, SET_PASTRIES } from "../types"


export const setPastries = (data) => {
    return {
        type: SET_PASTRIES,
        payload: data
    }
}

export const setBakers = (data) => {
    return {
        type: SET_BAKERS,
        payload: data,
    }
}