import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { addQuestion } from '../../redux/deck';

import { TextInput, Button } from '../../components/common';

class DeckDetail extends Component {
  state = {
    title: '',
    answer: '',
    isFormValid: false,
  };

  static navigationOptions = {
    headerTitle: 'Add Question',
  };

  componentDidUpdate(nextProps, nextState) {
    if (nextState.title !== this.state.title || nextState.answer !== this.state.answer) {
      return this.handleCheckFormValidity();
    }
  }

  handleCheckFormValidity = () =>
    this.setState(({ title, answer }) => ({
      isFormValid: !!title && !!answer,
    }));

  handleChangeField = name => value =>
    this.setState({
      [name]: value,
    });

  handleAddQuestion = () => {
    this.props.actions.addQuestion({
      deckId: this.props.navigation.state.params.deckId,
      title: this.state.title.trim(),
      answer: this.state.answer.trim(),
    });

    this.props.navigation.goBack();
  };

  render() {
    const {
      title,
      answer,
      isFormValid,
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Question?"
          onChangeText={this.handleChangeField('title')}
          value={title}
        />

        <TextInput
          placeholder="Answer?"
          onChangeText={this.handleChangeField('answer')}
          value={answer}
        />

        <Button
          label="Add Question"
          onPress={this.handleAddQuestion}
          style={styles.addQuestionButton}
          disabled={!isFormValid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  addQuestionButton: {
    marginTop: 20,
  },
});

const mapStateToProps = ({ deck }) => ({
  deck,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addQuestion: question => dispatch(addQuestion(question)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
