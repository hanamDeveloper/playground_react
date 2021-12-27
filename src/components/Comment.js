import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../datas/User/UserContextAPI";

const CommentWrapper = styled.div`
  border: 1px solid black;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Comment = () => {
  const [input, setInput] = useState();
  const { userData } = useContext(UserContext);
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addComment = () => {
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
        userName: userData[0].id,
      })
    );
  };

  const removeComment = (id) => {
    return setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <button onClick={() => addComment(input)}>댓글달기</button>
      {comments.map((comment, index) => (
        <CommentWrapper key={`${comment.userName}_${index}`}>
          <UserInfoWrapper>
            <p>{comment.userName}</p>
            <button onClick={() => removeComment(comment.id)}>삭제</button>
          </UserInfoWrapper>
          {comment.content}
        </CommentWrapper>
      ))}
    </div>
  );
};

export default Comment;
