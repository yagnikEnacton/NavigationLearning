import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MessagesScreen = () => {
  const navigation = useNavigation();

  // React.useEffect(() => {
  //   const unsubscribeFocus = navigation.addListener('focus', () => {
  //     console.log('MessageScreen focused');
  //   });

  //   const unsubscribeBlur = navigation.addListener('blur', () => {
  //     console.log('MessageScreen blurred');
  //   });

  //   return () => {
  //     unsubscribeFocus();
  //     unsubscribeBlur();
  //   };
  // }, [navigation]);
  return (
    <View style={styles.container}>
      {/* Skeleton Header */}
      <View style={styles.header}>
        <View style={styles.avatarSkeleton} />
        <View style={styles.titleSkeleton} />
      </View>

      {/* Message List Skeleton */}
      <View style={styles.messageContainer}>
        <View style={styles.messageBubbleSkeleton} />
        <View style={[styles.messageBubbleSkeleton, styles.receivedMessage]} />
        <View style={styles.messageBubbleSkeleton} />
      </View>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
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
    width: '50%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  messageContainer: {
    flex: 1,
    marginTop: 16,
  },
  messageBubbleSkeleton: {
    height: 40,
    width: '70%',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    marginBottom: 12,
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#d6d6d6',
  },
});
