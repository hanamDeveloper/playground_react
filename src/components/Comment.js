import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { UserContext } from '../datas/User/UserContextAPI';

const CommentWrapper = styled.div`
    border: 1px solid black;
`

const Comment = () => {
    const [ input, setInput ] = useState();
    const { userData } = useContext(UserContext);
    const [ comments, setComments ] = useState([])

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const addComment = () => {
        setComments(comments.concat({
            content: input,
            userName: userData[0].id
        }))
        console.log(comments)
    }

    console.log('userData',userData[0].id)

    

    

    return (
        <div>
            <input value={input} onChange={onChange}></input>
            <button onClick={() => addComment(input)}>댓글달기</button>
            {comments.map((comment, index) => (
                <CommentWrapper key={`${comment.userName}_${index}`}>
                    <p>{comment.userName}</p>
                    {comment.content}
                </CommentWrapper>
            ))}
        </div>
    )
}

export default Comment