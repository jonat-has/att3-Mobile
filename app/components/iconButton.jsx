// iconButton.js
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import addIcon from '../../assets/addIcon.png';

const IconButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={addIcon} style={{ width: 24, height: 24, marginRight: 10 }} />
    </TouchableOpacity>
  );
};

export default IconButton;
