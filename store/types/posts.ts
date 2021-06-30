import {PostState} from "./post";

export interface PostsState {
    posts: PostState[]
}

export enum PostsActionsTypes {
    GET_POSTS = 'GET_POSTS'
}

interface GetPostsAction {
    type: PostsActionsTypes.GET_POSTS,
    payload: PostsState
}

export type PostsAction = GetPostsAction