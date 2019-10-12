import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import AddComments from './AddComment';

class SinglePost extends Component {
  constructor() {
    super();

    this.state = {
      isModalVisible: false,
    };
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text>{this.props.post.description}</Text>
          </TouchableOpacity>
          <AddComments
            post={this.props.post}
            isModalVisible={this.state.isModalVisible}
            closeModal={() => this.closeModal()}
          />
        </View>
      </View>
    );
  }
}

export default SinglePost;
