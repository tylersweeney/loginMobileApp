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

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
