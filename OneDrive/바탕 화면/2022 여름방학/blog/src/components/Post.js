import axios from "axios";
import React, { useState,useEffect, history} from "react";
import { useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";


const PostWrap = styled.div``
const Container = styled.div``
const Row = styled.div``
const Buttondiv = styled.div`text-align: right; margin-right: 20px`


const Title = styled.p`padding: 10px 20px; margin-bottom: 20px; border-bottom: 1px solid #dbdbdb;`
const Content = styled.p`padding: 10px 20px;`
const CustomBtn = styled.button`margin-right: 10px; padding: 3px 7px 3px 7px; border-radius: 2px; border : solid 1px #ababab; cursor: pointer; background-color: white;`


const Post = () => {
    let {id} = useParams();
    const [post, setPost] = useState({
        title:'',
        content:''
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/readpost/${id}`).then((res)=>{
            const title = res.data[0].title
            const content = res.data[0].content
            setPost({
                ...post,
                title: title,
                content: content
            })
        })
    }, [])
    let nagative = useNavigate();

    const deletepost = () =>{
        if(window.confirm('삭제하시겠습니까?')){
            axios.delete(`http://localhost:8000/api/deletepost/${id}`).then(()=>{
                alert('삭제되었습니다')
                nagative('/')
            })
        } else {
            alert('취소되었습니다')
        }
    }

    return(
        <PostWrap>
            <Container>
                <Buttondiv>
                    <CustomBtn onClick={()=>{nagative(`/update/${id}`)}}>수정하기</CustomBtn>
                    <CustomBtn onClick={deletepost}>삭제하기</CustomBtn>
                </Buttondiv>
                <Row>
                    
                    <div>
                        <Title>{post.title}</Title>
                    </div>
                    <div>
                        <Content>{post.content}</Content>
                    </div>
                    
                    
                </Row>
                
            </Container>
        </PostWrap>
    )
}

export default Post