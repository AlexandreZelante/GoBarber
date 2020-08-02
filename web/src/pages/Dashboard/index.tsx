import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars1.githubusercontent.com/u/40640392?s=460&u=ff5a56d5c9207f8d22080814dcd074442d9f70e4&v=4"
              alt="Alexandre Zelante"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Alexandre Zelante</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
