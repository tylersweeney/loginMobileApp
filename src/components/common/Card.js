/*
  ______      __                 __     _____                                   
 /_  __/_  __/ /__  _____       / /    / ___/      _____  ___  ____  ___  __  __
  / / / / / / / _ \/ ___/  __  / /     \__ \ | /| / / _ \/ _ \/ __ \/ _ \/ / / /
 / / / /_/ / /  __/ /     / /_/ /     ___/ / |/ |/ /  __/  __/ / / /  __/ /_/ / 
/_/  \__, /_/\___/_/      \____(_)   /____/|__/|__/\___/\___/_/ /_/\___/\__, /  
    /____/                                                             /____/ 

*/

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };