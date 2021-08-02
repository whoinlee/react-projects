import styled from 'styled-components';


export const Wrapper = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  //TODO
  p {
    text-align: left;
  }

  .faTimes {
    color: red;
    cursor: pointer;
  }

  .reminder {
    border-left: 5px solid green;
  }

`;