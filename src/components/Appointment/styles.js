import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const SubTitle = styled.Text`
  color: #999999;
  font-size: 13px;
  margin-left: 5px;
  align-self: flex-end;
`;
