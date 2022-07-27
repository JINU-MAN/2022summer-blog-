import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';

const Updatewrap = styled.div``
const Container = styled.div`width: 1050px; margin: 0 auto;`
const Row = styled.div``


const InputTitle = styled.input`display: block; width: 100%; box-sizing: border-box; padding: 10px 20px; margin-bottom: 20px; border: none; border-bottom: 1px solid #dbdbdb;`
const InputContent = styled.textarea`display: block; width: 100%; min-height: 200px; box-sizing: border-box; padding: 10px 20px; resize: none; border: none;`
const SubmitBtn = styled.button`margin-left:30px; margin-right: 10px; padding: 3px 7px 3px 7px; border-radius: 2px; border : solid 1px #ababab; cursor: pointer; background-color: white;`



const Update = () =>{
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
    },[])

    const getvalue = (e) =>{
        const {name,value} = e.target
        setPost({
            ...post,
            [name] : value
        })
    }

    let nagative = useNavigate();

    const submit = () =>{
        axios.put(`http://localhost:8000/api/updatepost/${id}`,{
            title: post.title,
            content: post.content
        }).then(()=>{
            alert('수정되었습니다')
            nagative(`/post/${id}`)
        })
    }
    return(
        <Updatewrap>
            <Container>
                <Row>
                    <div>
                        <InputTitle type='text' placeholder='제목을 입력해주세요' name='title' onChange={getvalue}/>
                    </div>
                    <div>
                    <InputContent placeholder='본문을 작성해주세요' name='content' onChange={getvalue}></InputContent>
                    </div>
                    <div>
                        <SubmitBtn onClick={submit}>수정완료</SubmitBtn>
                    </div>
                </Row>
            </Container>
        </Updatewrap>
    )
}

export default Update