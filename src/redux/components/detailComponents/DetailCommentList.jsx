import React from "react";

function DetailCommentList({ detail }) {
  return (
    <>
      <div>
        {detail.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.id}</div>
              <div>
                {item.classNumber}-{item.specialty}
              </div>
              <div>{item.title}</div>
              <div>{item.nickname}</div>
              <div>{item.createdAt}</div>
              {item.commentList.map((comment) => (
                <div>{comment.nickname}</div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DetailCommentList;
