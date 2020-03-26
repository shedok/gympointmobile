import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  /* flex-direction: row;
  align-items: center; */
  justify-content: space-between;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  /* justify-content: space-between; */
`;
export const HeaderSub = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 12px;
  color: #999999;
`;

export const SubTitle = styled.Text`
  color: #666666;
  font-size: 14px;
  text-align: right;
  font-family: Helvetica;
`;

export const Text = styled.Text`
  color: #666666;
  font-size: 14px;
  text-align: justify;
  font-family: Helvetica;
  line-height: 26px;
`;

export const ContainerSub = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: row;
`;
