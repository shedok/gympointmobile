import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SingIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
          />
          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
