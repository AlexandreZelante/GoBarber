import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProvidersListTitle,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([
    {
      id: 'a21bb12e-4e83-44aa-b409-a33f83963ec2',
      name: 'Camila Zelante',
      email: 'camila.zelante.94@hotmail.com',
      avatar: 'b6277c9b6709737635aa-ibmLogoSquareBlack.jpeg',
      created_at: '2020-07-02T09:59:00.685Z',
      updated_at: '2020-07-24T04:07:19.852Z',
      avatar_url:
        'http://localhost:3333/files/b6277c9b6709737635aa-ibmLogoSquareBlack.jpeg',
    },
    {
      id: 'ba188cf6-57ad-4e13-a154-64aa41014212',
      name: 'Camila Zelante',
      email: 'lele1200@hotmail.com',
      avatar: '4be1493b311fd3fb4bc2-ibmLogoSquareBlack.jpeg',
      created_at: '2020-07-20T06:37:28.270Z',
      updated_at: '2020-07-27T05:32:33.068Z',
      avatar_url:
        'http://localhost:3333/files/4be1493b311fd3fb4bc2-ibmLogoSquareBlack.jpeg',
    },
  ]);

  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    api
      .get('/providers')
      .then((response) => {
        setProviders(response.data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }, []);

  const navigateToProfile = useCallback(() => {
    // navigate('Profile');
    signOut();
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Cabeleireiros</ProvidersListTitle>
        }
        data={providers}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar
              source={{
                uri: provider.avatar_url
                  ? provider.avatar_url
                  : 'http://localhost:3333/files/b6277c9b6709737635aa-ibmLogoSquareBlack.jpeg',
              }}
            />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <ProviderMetaText>8h à 18h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
