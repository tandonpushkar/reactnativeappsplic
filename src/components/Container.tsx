import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';
import {colors} from '../styles/colors';

export interface Props {
  children: any;
  containerStyle?: ViewStyle | ViewStyle[];
}

const Container = (props: Props) => { 
  return (
    <SafeAreaView
      style={[
        { flex: 1 ,backgroundColor:colors.white},
        props.containerStyle,
      ]}>
      {props.children}
    </SafeAreaView>
  );
};
Container.defaultProps = {};
export default Container;
