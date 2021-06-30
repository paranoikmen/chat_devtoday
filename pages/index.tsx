import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import {getPosts} from "../store/actions/postsAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import styled from 'styled-components';
import {PostState} from "../store/types/post";

const Main = styled.main`   
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

export default function Home() {

    const numberOfLastPosts: number = 5

    const {posts} = useTypedSelector(state => state.posts)

    const {getPosts} = useActions()
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <Head>
                <title>Simple blog</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Main>
                <div>
                    {
                        posts.length !== 0
                        &&
                        <div>
                            <H2>Latest posts:</H2>
                            <ul>
                                {
                                    posts.slice(posts.length - numberOfLastPosts).map((post: PostState) =>
                                        <PostContainer key={post.id}>
                                            <div style={{fontSize: "24px"}}>{post.title}</div>
                                            <div>{post.body}</div>
                                        </PostContainer>)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </Main>
        </div>
    )
}






