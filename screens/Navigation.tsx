import React, { createContext, useState } from 'react';
import {
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import FeedScreen from './FeedScreen';
import MessagesScreen from './MessagesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
// import {View} from 'react-native-reanimated/lib/typescript/Animated';



import {
  HeaderBackButton,
  HeaderBackground,
  HeaderButton,
  HeaderTitle,
  Label,
} from '@react-navigation/elements';
import {StyleSheet} from 'react-native';
import {navigationRef} from './RootNavigation';

type RootStackParamList = {
  MyDrawer: undefined;
  Details: undefined;
};
 
const UserContext = createContext<{
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
} | undefined>(undefined);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['myapp://app'],
  config: {
    screens: {
      MyDrawer: {
        screens: {
          MoreTabs: {
            screens: {
              Home: 'home',
              Feed: 'feed',
              Messages: 'messages',
            },
          },
          Profile: 'profile',
          Setting: 'setting',
        },
      },
      Details: 'details',
    },
  },
};

function MoreTabs() {
  return (
    <Tab.Navigator
      backBehavior={'history'}
      // layout={({children, state, descriptors, navigation}) => (
      //   <View style={styles.container}>
      //     {/* Custom Header */}
      //     <View style={styles.header}>
      //       <Text style={styles.headerText}>Custom Layout Header</Text>
      //     </View>

      //     {/* Screen Content */}
      //     <View style={styles.content}>{children}</View>

      //     {/* Custom Footer */}
      //     <View style={styles.footer}>
      //       <Text style={styles.footerText}>Custom Layout Footer</Text>
      //     </View>
      //   </View>
      // )}
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'skyblue'},
        headerTitleStyle: {color: '#fff'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          // header: () => {
          //   return <Header title="Home"></Header>;
          // },
          headerTitle: () => <HeaderTitle>HomeFromElement</HeaderTitle>,
          headerBackground: () => {
            return (
              <HeaderBackground
                style={{backgroundColor: 'grey'}}></HeaderBackground>
            );
          },
          headerLeft: () => {
            return (
              <HeaderBackButton
                label="Hello"
                onPress={() => console.log('back pressed')}
              />
            );
          },
          headerRight: () => {
            return (
              <HeaderButton
                accessibilityLabel="More options"
                onPress={() => console.log('button pressed')}>
                <Ionicons name="add-outline" size={24} color={'black'} />
              </HeaderButton>
            );
          },
          tabBarLabel: () => <Label>Home</Label>,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color} /> // Add the icon here
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="images-outline" size={size} color={color} /> // Add the icon here
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="mail-outline" size={size} color={color} /> // Add the icon here
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MoreTabs" component={MoreTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      // screenListeners={{
      //   state: e => {
      //     // Do something with the state
      //     console.log('state changed', e.data);
      //   },
      // }}
      initialRouteName="MyDrawer"
      // layout={() => (
      //   <View style={{flex:1,backgroundColor: 'red'}}>
      //     <Text>Header</Text>
      //   </View>
      // )}
      screenOptions={{
        headerStyle: {backgroundColor: 'skyblue'},
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Group>
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  // const navigationRef = useNavigationContainerRef();
  const [user,setUser] = useState('John Doe');
  // useLogger(navigationRef);
  console.log('user',user);
  return (

    <UserContext.Provider value={{user,setUser}}><NavigationContainer
      linking={linking}
      onReady={() => console.log('NavigationContainer is ready')}
      onStateChange={state => console.log('Current state: ', state)}
      ref={navigationRef}>
      <RootStack />
    </NavigationContainer></UserContext.Provider>
    
  );
}
export {UserContext};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
  },
});
