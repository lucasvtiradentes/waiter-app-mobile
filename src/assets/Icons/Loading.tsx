import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { APP_MAIN_COLOR } from '../../configs/configs';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={'large'} color={APP_MAIN_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export {Loading};
