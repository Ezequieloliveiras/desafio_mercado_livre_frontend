import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const StyledCardMedia = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const StyledCardContent = styled.div`
  margin-left: 20px;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

export {
  StyledCard,
  StyledCardMedia,
  StyledCardContent
}
