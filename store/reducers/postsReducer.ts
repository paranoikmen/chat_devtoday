import {PostsAction, PostsActionsTypes, PostsState} from "../types/posts";

const initialState: PostsState = {
    posts: []
}

export const postsReducer = (state = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostsActionsTypes.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}