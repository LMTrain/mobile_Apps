import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Drawer } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import CardImage from './components/CardImage';
import FooterBadge from './components/FooterBadge';
import Sidebar from './components/Sidebar';

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  closeDrawer() {
        this.drawer._root.close()
  }
  openDrawer() {
        this.drawer._root.open()
  }


  render() {

    return (

      <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<Sidebar navigator={this.navigator} />}
              onClose={() => this.closeDrawer()} >
              <Container>
                <Header>
                  <Left>
                    <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Side bar Drawer</Title>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Icon name='camera' />
                    </Button>
                  </Right>
                </Header>

                <FlatList
                  
                  data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
                  renderItem={({item}) => <CardImage />}
                   />
              </Container>
              <FooterBadge />
            </Drawer>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
