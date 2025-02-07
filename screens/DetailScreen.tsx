import {Button, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useRef} from 'react';
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const DetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const lastElement = useRef(false);
  // const route = useRoute();
  // const {itemId, name} = route.params as {itemId: number; name: string};
  // console.log(itemId, name);
  const lastRouteName = useNavigationState(state => {
    const routes = state.routes;
    return routes.length > 0
      ? (lastElement.current = true)
      : (lastElement.current = false);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetailScreen</Text>
      {/* <Text style={styles.paramText}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.paramText}>name: {JSON.stringify(name)}</Text> */}

      <Button
        title="Go to Details... again"
        onPress={() => navigation.replace('Details')}
      />
      <Button
        title="change params"
        onPress={() => navigation.setParams({itemId: 45, name: 'new param'})}
      />
      <Button
        title="Go back"
        onPress={() =>
          !lastElement
            ? navigation.goBack()
            : ToastAndroid.show("You Can't Go Back ", ToastAndroid.SHORT)
        }
      />
      <Button
        title="Go Home"
        onPress={() =>
          !lastElement
            ? navigation.popTo('Home')
            : ToastAndroid.show("You Can't Go Back ", ToastAndroid.SHORT)
        }
      />
      <Button
        title=" Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}></Button>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paramText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});
