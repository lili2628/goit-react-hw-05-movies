import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
`;

export const Item = styled.li`
  flex-basis: 150px;
  width: 200px;
  height: 300px;

  position: relative;
`;

export const Box = styled.div`
  position: absolute; 
	bottom:0;
`;

export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 4px;
  width: 100%;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Character = styled.p`
  color: #312754;
`;

export const Empty = styled.p`
  color: #312754;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;