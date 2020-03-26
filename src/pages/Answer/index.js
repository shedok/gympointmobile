import React from 'react';

import { TouchableOpacity, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Title, HeaderSub, SubTitle } from './styles';

export default function Answer() {
  return (
    <Container>
      <Header>
        <Title>Respondido</Title>
        <HeaderSub>
          <SubTitle>hoje às 7:15</SubTitle>
        </HeaderSub>
      </Header>
      {/* <Text /> */}
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  title: 'Resposta',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Helper');
      }}
      title="Info"
      color="#ddd"
    >
      <Icon name="chevron-left" size={20} color="#dddddd" />
    </TouchableOpacity>
  ),
});
