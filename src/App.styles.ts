import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 2rem 1rem;
  gap: 2rem;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
export const InfoArea = styled.div`
  width: auto;
  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.2rem;
  img {
    width: 250px;
    height: auto;
    object-fit: cover;
  }
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
