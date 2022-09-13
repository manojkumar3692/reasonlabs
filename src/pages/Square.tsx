import React, { useState } from "react";
import styled from "styled-components";
type Props = {};

export default function Square({}: Props) {
  const squareList = [...Array(16)].map((each: any, index: number) => index);
  const [selectedNode, setSelectedNode]: any = useState([]);

  const triggerClick = (e: any, index: any) => {
    let filterArr = selectedNode;
    if (selectedNode.includes(index)) {
      filterArr.splice(selectedNode.indexOf(index), 1);
    } else {
      filterArr.push(index);
    }
    setSelectedNode([...filterArr]);
  };
  return (
    <div>
      <FlexContainer>
        {squareList.map((each: any, index: number) => {
          return (
            <FlexDiv
              style={{
                background:
                  (selectedNode.includes(index) &&
                    index === selectedNode[selectedNode.length - 1]) ||
                  index === selectedNode[selectedNode.length - 2]
                    ? "red"
                    : selectedNode.includes(index)
                    ? "blue"
                    : "inherit",
              }}
              key={index}
              onClick={(e) => triggerClick(e, index)}
            >
              {index}
            </FlexDiv>
          );
        })}
      </FlexContainer>
    </div>
  );
}

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  margin: 1rem;
  text-align: center;
`;

export const FlexDiv = styled.div`
  border: 1px solid #000;
  flex: 0 0 10%;
  padding: 1rem;
  cursor: pointer;
`;

export const SquareTable = styled.table`
  border-collapse: collapse;
  tr,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
