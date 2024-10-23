import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0px 0px 5px 0px grey;
  width: 600px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledCardMedia = styled.img`
  object-fit: contain;
  width: 200px;
  height: 100px;
`;

const StyledCardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

export {
    StyledCard,
    StyledCardMedia,
    StyledCardContent
}