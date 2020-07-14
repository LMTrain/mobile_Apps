import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const data = [
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg",
    title: "Waterfall on Stones"
  },
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg",
    title: "Safari Desert"
  },
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg",
    title: "Mountain Waterfall"
  },
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/jeffrey-workman-unsplash.jpg",
    title: "Stone Garden Waterfall"
  },
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/space2.webp",
    title: "Space Wondering"
  },
  {
    imageUrl: "https://lmtrain.github.io/lm-images/assets/images/space3.webp",
    title: "Universe"
  }
];



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
          return(
            <Card
              style={{height: 200}}
              title={null}
              image={{url: rowData.imageUrl }}
              containerStyle={{padding: 0, width: 160, height: 200, marginTop: 150}}
              >
              <Text style={{marginBottom: 10}}>{rowData.title}</Text>
            </Card>
          );
        }
    }
    keyExtractor={(item, index) => index}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
