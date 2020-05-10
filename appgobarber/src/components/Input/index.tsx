import React from 'react';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

import { Container, TextInput, Icon } from './styles';

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name="mail" size={20} color="#666360" />
    <TextInput
      keyboardAppearance="dark"
      {...rest}
      placeholderTextColor="#666360"
    />
  </Container>
);

export default Input;
