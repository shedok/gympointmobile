import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  SubTitle,
  Header,
  Text,
  ContainerSub,
  HeaderSub,
} from './styles';

export default function Help() {
  function handleSubmit() {}
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Header>
          <Icon name="check-circle" size={16} color="#dddd" />
          <Title>Respondido</Title>
          <HeaderSub>
            <SubTitle>hoje às 7:15</SubTitle>
          </HeaderSub>
        </Header>

        <ContainerSub>
          <Text>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </Text>
        </ContainerSub>
      </Container>
    </TouchableOpacity>
  );
}
