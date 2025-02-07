// components/LogoTitle.tsx
import React from 'react';
import {Image, View} from 'react-native';

function LogoTitle() {
  return (
    <View style={{flex:1, alignItems: 'center',justifyContent :'center'}}>
      <Image
        style={{width: 50, height: 50}}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}

export default LogoTitle;
