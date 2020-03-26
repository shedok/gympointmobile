import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Backgound from '../../components/BackgroundSingIn';
import Appointment from '~/components/Appointment';
import { Container, List, SubmitButton } from './styles';

const data = [1, 2, 3, 4, 5];
export default function Dashboard() {
  return (
    <Backgound>
      <Container>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Backgound>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
