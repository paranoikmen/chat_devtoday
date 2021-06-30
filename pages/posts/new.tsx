import { useState} from "react";
import {createPost} from "../../store/actions/postAction";
import {useActions} from "../../hooks/useActions";
import styled from "styled-components";

const MainContainer = styled.div`   
  transform: translate(-50%, -50%);
  position: absolute; 
  top: 50%; 
  left: 50%;
`;

const Container = styled.div`
max-width: 700px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  padding 25px;
`;

const Button = styled.button`
margin 10px;
margin-left: 80px;
background-color: #555555;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;


function New() {
    const [post, setPost] = useState({title: "", body: ""})

    const {createPost} = useActions()

    const handleSubmit = () => {
        setPost(prevState => ({...prevState, title: "", body: ""}))
        createPost(post.title, post.body)
    }

    return (
        <MainContainer>
            <Container>
                Create post:
                <Container>
                    Title of post:
                    <input type="text" value={post.title}
                           onChange={(e) => setPost(prevState => ({...prevState, title: e.target.value}))}
                    />
                </Container>
                <Container>
                    Body of post:
                    <input type="text" value={post.body}
                           onChange={(e) => setPost(prevState => ({...prevState, body: e.target.value}))}
                    />
                </Container>
                <Button onClick={handleSubmit}>
                    Create post
                </Button>
            </Container>
        </MainContainer>
    );
}

export default New;