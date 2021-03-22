import { SET_BAKERS, SET_PASTRIES, SET_USERS } from "../types"


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

export const setUsers = (data) => {
    return {
        type: SET_USERS,
        payload: data,
    }
}