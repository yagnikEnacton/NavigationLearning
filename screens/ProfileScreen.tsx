import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header Skeleton */}
      <View style={styles.header}>
        <View style={styles.avatarSkeleton} />
        <View style={styles.nameSkeleton} />
        <View style={styles.subTitleSkeleton} />
      </View>

      {/* Content Skeleton */}
      <View style={styles.content}>
        <View style={styles.lineSkeleton} />
        <View style={styles.lineSkeleton} />
        <View style={styles.lineSkeleton} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarSkeleton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },
  nameSkeleton: {
    width: '50%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  subTitleSkeleton: {
    width: '70%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  content: {
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
