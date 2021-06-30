import {useRouter} from "next/router";
import {useEffect} from "react";
import {getPost} from "../../store/actions/postAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {PostState} from "../../store/types/post";
import {CommentState} from "../../store/types/comment";
import styled from "styled-components";

const MainContainer = styled.div`   
  transform: translate(-50%, -50%);
  position: absolute; 
  top: 50%; 
  left: 50%;
`;

const CommentContainer = styled.li`
max-width: 700px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  padding 20px;
  list-style-type: none;
`;

const Container = styled.div`
max-width: 700px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  padding 20px;
`;


export default function (id: number) {
    const {query} = useRouter()

    const post: PostState = useTypedSelector(state => state.post)

    const {getPost} = useActions()
    useEffect(() => {
        getPost(query.postId)
    }, [query.postId])

    return (
        <MainContainer>
            <Container><h2>Title:</h2>{post.title}</Container>
            <Container><h2>Description:</h2>{post.body}</Container>
            {
                post.comments.length !== 0
                &&
                <div>
                    <h2>Comments:</h2>
                    <ul>
                        {
                            post.comments.map((comment: CommentState) => (
                                comment.body.length !== 0 &&
                                <CommentContainer key={comment.id}>
                                    {comment.body}
                                </CommentContainer>
                                )
                            )
                        }
                    </ul>
                </div>
            }

        </MainContainer>
    );
};



