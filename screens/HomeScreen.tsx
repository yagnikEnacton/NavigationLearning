import {Alert, Button, Linking, StyleSheet, Text, View} from 'react-native';
import React, {createContext, useCallback, useContext, useState} from 'react';
import {
  DrawerActions,
  Link,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ResourceSavingView,
  SafeAreaProviderCompat,
} from '@react-navigation/elements';
import {UserContext} from './Navigation';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.openURL(url);
    console.log('supported:', supported);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const context = useContext(UserContext);
  console.log('context:', context);

  const {user,setUser} = context!;
  console.log('user:', user);
  // console.log('updatedUser:', user);

  // const route = useRoute();
  // console.log('HomeScreen route:', JSON.stringify(route));

  // const [visible, setVisible] = useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log('HomeScreen focus effect');

  //     return () => {
  //       console.log('HomeScreen focus effect cleanup');
  //     };
  //   }, []),
  // );

  return (
    <View style={styles.container}>
      {/* <ResourceSavingView visible={visible}> 
        <Text style={styles.title}>Home Screen</Text>
      </ResourceSavingView> */}
      <Text style={styles.title}>{user}</Text>
      <View style={styles.button}>
        <Button
          color={'skyblue'}
          title="Open Drawer"
          onPress={() => {
            // setVisible(!visible);
            navigation.dispatch(DrawerActions.openDrawer());
          }} // Button to open the drawer
        />
      </View>
      <View collapsable={true} style={styles.button}>
        <Button
          color={'skyblue'}
          title="Go to Details"
          onPress={() => {
            // navigation.navigate('More', { screen: 'Messages' });
            navigation.navigate('Details');
          }}
        />
        
        <Button
          color={'skyblue'}
          title="set New User"
          onPress={() => {
            // navigation.navigate('More', { screen: 'Messages' });
            setUser('newUser');
          }}
        />
        <OpenURLButton url={'tel:+917802951191'}> google</OpenURLButton>
      </View>
    </View>
  );
};

export default HomeScreen;

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  paramText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 20,
  },
});
