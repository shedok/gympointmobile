import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const SubmitButton = styled(Button)`
  margin: 15px 20px 0 20px;
`;
