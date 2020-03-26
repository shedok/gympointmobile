import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Backgound from '../../components/BackgroundSingIn';
import Help from '~/components/Help';
import { Container, SubmitButton, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Helper({ navigation }) {
  return (
    <Backgound>
      <Container>
        <SubmitButton
          onPress={() => {
            navigation.navigate('Answer');
          }}
        >
          Novo pedido de auxílio
        </SubmitButton>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Help data={item} />}
        />
      </Container>
    </Backgound>
  );
}

Helper.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
