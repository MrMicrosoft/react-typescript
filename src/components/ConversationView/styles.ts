import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  display: block;
  padding-bottom: 20px;
`;

export const TodoInput = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 2px;
`;

export const TodoItemStyle = styled.div`
  margin-bottom: 10px;
`;

export const MessagePair = styled.div`
  margin-bottom: 20px;
`;

export const InputMessage = styled.div`
    width: 100%;
    align-items: left;
`;

export const OutputMessage = styled.div`
  width: 100%;
  align-items: right;
`;