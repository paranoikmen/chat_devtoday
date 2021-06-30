export interface PostsState {
    posts: {
        id: number,
        title: string,
        body: string }[]
}

export enum PostsActionsTypes {
    GET_POSTS = 'GET_POSTS'
}

interface GetPostsAction {
    type: PostsActionsTypes.GET_POSTS,
    payload: PostsState
}

export type PostsAction = GetPostsAction