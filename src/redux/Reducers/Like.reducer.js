import { SET_DISLIKE, SET_LIKE } from "../types";


const INI_STATE = {
    likes: 0,
    dislikes: 0,
}

const LikeReducer = (state = INI_STATE, action) => {
    switch (action.type) {
        case SET_LIKE:
            const likes = action.payload + 1;
            return {...state, likes};
        case SET_DISLIKE:
            const dislikes = action.payload + 1;
            return {...state, dislikes}       
        default:
            return state;
    }
}

export default LikeReducer;