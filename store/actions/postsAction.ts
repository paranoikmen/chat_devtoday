import axios from "axios";
import {Dispatch} from "redux";
import {PostsAction, PostsActionsTypes} from "../types/posts";

export const getPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts')
            dispatch({
                type: PostsActionsTypes.GET_POSTS,
                payload: response['data']
            })
        } catch (e) {
            console.log(e)
        }
    }
}

