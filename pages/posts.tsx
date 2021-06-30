import {getPosts} from "../store/actions/postsAction";
import React, {useEffect} from "react";
import A from "../components/A";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {PostState} from "../store/types/post";
import styled from "styled-components";

const MainContainer = styled.div`   
  transform: translate(-50%, -50%);
  position: absolute; 
  top: 50%; 
  left: 50%;
`;

const H2 = styled.h2`
 margin-left: 30px;
`;

const PostContainer = styled.li`
max-width: 700px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  padding 20px;
  list-style-type: none;
`;

function Posts() {

    const {posts} = useTypedSelector(state => state.posts)
    const {getPosts} = useActions()
    useEffect(() => {
        getPosts()
    }, [])


    return (
        <MainContainer>
            <H2>All posts:</H2>
            <ul>
                {
                    posts.map((post: PostState) =>
                        <PostContainer key={post.id}>
                            <A href={`/posts/${post.id}`} text={post.title}/>
                        </PostContainer>)
                }
            </ul>
        </MainContainer>
    );
}

export default Posts;
