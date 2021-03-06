import React, { Component } from 'react';
import { Container, Header, Content, List } from 'native-base';
import {FlatList, Alert} from 'react-native';

export default class ListItems extends Component {
  render() {
    const {
      handleLoadMore,
      renderFooter,
      renderList
      } = this.props;
    return (
    <List style={{marginTop:10}}>
      <FlatList
        data={this.props.materi}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={renderFooter()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        renderItem={({item, index}) => renderList(item,index)}
      />
    </List>
    );
  }
}