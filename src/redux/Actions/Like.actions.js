import { SET_DISLIKE, SET_LIKE } from "../types"


export const setLike = (likes) => {
    return {
        type: SET_LIKE,
        payload: likes,
    }
}

export const setDislike = (dislikes) => {
    return {
        type: SET_DISLIKE,
        payload: dislikes
    }
}