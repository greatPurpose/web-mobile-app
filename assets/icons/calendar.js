import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

export default class CalendarSVG extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
        <Svg
          width="100%"
          height="100%"
          viewBox="-10 0 480 480"
          fill="white">
          <Path
            d="m376 192h-32v-176c0-8.835938-7.164062-16-16-16h-256c-8.835938 0-16 7.164062-16 16v176h-32c-13.253906 0-24 10.746094-24 24v240c0 13.253906 10.746094 24 24 24h352c13.253906 0 24-10.746094 24-24v-240c0-13.253906-10.746094-24-24-24zm-304-176h256v176h-256zm312 440c0 4.417969-3.582031 8-8 8h-352c-4.417969 0-8-3.582031-8-8v-240c0-4.417969 3.582031-8 8-8h352c4.417969 0 8 3.582031 8 8zm0 0"/>

            <Path d="m200 224c-61.855469 0-112 50.144531-112 112s50.144531 112 112 112 112-50.144531 112-112c-.066406-61.828125-50.171875-111.933594-112-112zm0 208c-53.019531 0-96-42.980469-96-96s42.980469-96 96-96 96 42.980469 96 96c-.058594 52.996094-43.003906 95.941406-96 96zm0 0"/>
            <Path d="m208 313.472656v-41.472656h-16v41.472656c-6.777344 2.417969-12.109375 7.75-14.527344 14.527344h-41.472656v16h41.472656c3.699219 10.53125 14.1875 17.109375 25.28125 15.855469 11.09375-1.257813 19.84375-10.007813 21.101563-21.101563 1.253906-11.09375-5.324219-21.582031-15.855469-25.28125zm-8 30.527344c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0"/>
            <Path d="m168 104v-64c0-4.417969-3.582031-8-8-8h-64c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8zm-16-8h-48v-48h48zm0 0"/>
            <Path d="m200 48h32v16h-32zm0 0"/>
            <Path d="m248 48h64v16h-64zm0 0"/>
            <Path d="m200 80h112v16h-112zm0 0"/>
            <Path d="m136 128h48v16h-48zm0 0"/>
            <Path d="m216 128h80v16h-80zm0 0"/>
            <Path d="m136 160h48v16h-48zm0 0"/>
            <Path d="m216 160h80v16h-80zm0 0"/>
            <Path d="m352 216c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0"/>
            <Path d="m352 408c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0"/>
            <Path d="m48 216c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0"/>
            <Path d="m48 408c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0" />
        </Svg>
      </View>
    );
  }
}