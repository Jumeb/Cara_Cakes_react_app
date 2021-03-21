import { SET_BAKERS, SET_PASTRIES, SET_USERS } from "../types"


const INITIAL_STATE = {
    pastries: [],
    bakers: [],
    users: [],
}

const DataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PASTRIES:
            const pastries = action.payload;
            return {...state, pastries};
        case SET_BAKERS:
            const bakers = action.payload;
            return {...state, bakers};
        case SET_USERS:
            const users = action.payload;
            return {...state, users};
        default:
            return state;
    }
}

export default DataReducer;