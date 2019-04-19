/*
  ______      __                 __     _____                                   
 /_  __/_  __/ /__  _____       / /    / ___/      _____  ___  ____  ___  __  __
  / / / / / / / _ \/ ___/  __  / /     \__ \ | /| / / _ \/ _ \/ __ \/ _ \/ / / /
 / / / /_/ / /  __/ /     / /_/ /     ___/ / |/ |/ /  __/  __/ / / /  __/ /_/ / 
/_/  \__, /_/\___/_/      \____(_)   /____/|__/|__/\___/\___/_/ /_/\___/\__, /  
    /____/                                                             /____/ 

*/

// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'c52128',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
