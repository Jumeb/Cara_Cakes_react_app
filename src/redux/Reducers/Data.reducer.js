import { SET_BAKERS, SET_PASTRIES } from "../types"


const INITIAL_STATE = {
    pastries: [],
    bakers: [],
}

const DataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PASTRIES:
            const pastries = action.payload;
            return {...state, pastries};
        case SET_BAKERS:
            const bakers = action.payload;
            return {...state, bakers};
        default:
            return state;
    }
}

export default DataReducer;