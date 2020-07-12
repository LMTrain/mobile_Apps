/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView>

        <View style={styles.bigview}>
        <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/jeffrey-workman-unsplash.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/space2.webp'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_field3.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_dayrbow.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_field-wiki.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/ls_Mono-Lake.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/crm8.jpg'}}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={{uri:'https://lmtrain.github.io/lm-images/assets/images/crm5.jpg'}}
               />
          </View>  
          
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  myimage: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  }
});
