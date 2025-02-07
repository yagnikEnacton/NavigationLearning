import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

const FeedScreen = () => {
  const navigation = useNavigation();
  useFocusEffect(() => {});
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Do something when the screen blurs
      const currentState = navigationRef.getState();
      console.log('Current Navigation State:', currentState);
    });

    return unsubscribe;
  }, [navigation]);
  // React.useEffect(() => {
  //   const unsubscribeFocus = navigation.addListener('focus', () => {
  //     console.log('FeedScreen focused');
  //   });

  //   const unsubscribeBlur = navigation.addListener('blur', () => {
  //     console.log('FeedScreen blurred');
  //   });

  //   return () => {
  //     unsubscribeFocus();
  //     unsubscribeBlur();
  //   };
  // }, [navigation]);
  return (
    <View style={styles.container}>
      {/* Header Skeleton */}
      <View style={styles.headerSkeleton}>
        <View style={styles.avatarSkeleton} />
        <View style={styles.textSkeleton} />
      </View>

      {/* Post Skeleton */}
      <View style={styles.postSkeleton}>
        <View style={styles.imageSkeleton} />
        <View style={styles.titleSkeleton} />
        <View style={styles.subtitleSkeleton} />
      </View>

      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      {/* Activity Indicator for Loading */}
      <ActivityIndicator size="large" color="#888" style={styles.loader} />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerSkeleton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarSkeleton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    marginRight: 12,
  },
  textSkeleton: {
    height: 20,
    width: '60%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  postSkeleton: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  imageSkeleton: {
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
  },
  titleSkeleton: {
    height: 20,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 4,
  },
  subtitleSkeleton: {
    height: 16,
    width: '60%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  loader: {
    marginTop: 20,
  },
});
