import {PostAction, PostActionsTypes, PostState} from "../types/post";

const initialState: PostState = {
    title: "",
    body: "",
    id: -1,
    comments: []
}

export const postReducer = (state = initialState, action: PostAction) : PostState => {
    switch (action.type) {
        case PostActionsTypes.GET_POST:
            return {
                ...state,
                ...action.payload
            };
        case PostActionsTypes.CREATE_POST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}