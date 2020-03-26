import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Title, SubTitle } from './styles';

export default function Appointment() {
  function handleSubmit() {}
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Title>Check-in #7</Title>
        <SubTitle>hoje às 7:15</SubTitle>
      </Container>
    </TouchableOpacity>
  );
}
