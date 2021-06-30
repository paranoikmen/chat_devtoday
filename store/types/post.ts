import {CommentState} from "./comment";

export interface PostState {
    title: string,
    body: string,
    id: number,
    comments?: CommentState[],
}

export interface PostResponseCreate {
    title: string,
    body: string,
    id: number,
}

export enum PostActionsTypes {
    GET_POST = 'GET_POST',
    CREATE_POST = 'CREATE_POST'
}
interface GetPostAction {
    type: PostActionsTypes.GET_POST,
    payload: PostState
}
interface CreatePostAction {
    type: PostActionsTypes.CREATE_POST
    payload: PostResponseCreate
}

export type PostAction = GetPostAction | CreatePostAction