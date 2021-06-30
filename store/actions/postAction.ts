import axios from "axios";
import {Dispatch} from "redux";
import {PostAction, PostActionsTypes} from "../types/post";

export const getPost = (postId: number) => {
    return async (dispatch : Dispatch<PostAction>) => {
        try {
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
            dispatch({
                type: PostActionsTypes.GET_POST,
                payload: response['data']
            })
        } catch (e) {
            console.log(e)
        }

    }
}

export const createPost = (titlePost: string, bodyPost: string) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            const response = await axios.post('https://simple-blog-api.crew.red/posts', {
                title: titlePost,
                body: bodyPost,
            })
            dispatch({
                type: PostActionsTypes.CREATE_POST,
                payload: response['data']
            })
        } catch (e) {
            console.log(e)
        }

    }
}
