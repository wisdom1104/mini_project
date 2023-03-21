import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BoardTable({ board }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th>게시물 번호</Th>
              <Th>기수-주특기</Th>
              <Th>제목</Th>
              <Th>닉네임</Th>
              <Th>작성시간</Th>
            </Tr>
          </Thead>
          <Tbody>
            {board.map((item) => {
              return (
                <Tr
                  key={item.id}
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  <Td>{item.id}</Td>
                  <Td>
                    {item.classNumber}-{item.specialty}
                  </Td>
                  <Td>{item.title}</Td>
                  <Td>{item.nickname}</Td>
                  <Td>{item.createdAt}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
}

export default BoardTable;

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
const Thead = styled.thead`
  border-bottom: 1px solid gray;
  padding: 0;
  font-size: 16px;
  padding: 10px 5px;
  font-weight: bold;
`;
const Tr = styled.tr`
  cursor: pointer;
`;
const Th = styled.th``;
const Tbody = styled.tbody``;
const Td = styled.td`
  margin-top: 10px;
  padding: 10px;
`;
