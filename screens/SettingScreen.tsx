import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navigate, navigationRef} from './RootNavigation';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Skeleton */}
      <View style={styles.headerSkeleton}>
        <View style={styles.avatarSkeleton} />
        <View style={styles.titleSkeleton} />
      </View>

      {/* Content Skeleton */}
      <View style={styles.contentSkeleton}>
        <View style={styles.lineSkeleton} />
        <View style={styles.lineSkeleton} />
        <View style={styles.lineSkeleton} />
      </View>
      <Button
        title={'massage'}
        onPress={() => {
          if (navigationRef.isReady()) {
            console.log('Navigating to Details');
            const params = {}; // Define your params here
            Navigate('Details', params);
          } else {
            console.log('Navigation is not ready yet');
          }
        }}></Button>
    </View>
  );
};

export default SettingScreen;

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
  titleSkeleton: {
    height: 20,
    width: '60%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  contentSkeleton: {
    marginTop: 16,
  },
  lineSkeleton: {
    height: 16,
    width: '90%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 12,
  },
});
