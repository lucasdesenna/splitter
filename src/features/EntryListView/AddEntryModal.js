import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// import EntryRepository from 'repositories/Entry.repo';
import { addEntry } from 'containers/activeCircle.actions';

const mapStateToProps = state => ({
  activeUser: state.activeUser,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddEntry: entryData => {
    dispatch(addEntry(entryData));
    // EntryRepository.add(entryData);
  },
});

const isDescriptionValid = entry =>
  (entry.description: string) && entry.description.length >= 5;

const isValueValid = entry =>
  (entry.value: string) && parseFloat(entry.value) > 0;

const validateEntry = entry => isDescriptionValid(entry) && isValueValid(entry);

class AddEntryModal extends Component {
  state = {
    entry: {},
    isEntryValid: false,
  };

  handleEntrySubmission = () => {
    const newEntry = {
      ...this.state.entry,
      userId: this.props.activeUser.id,
    };

    this.props.dispatchAddEntry(newEntry);
    this.props.onRequestClose();
  };

  handleEntryDescriptionChange = event => {
    const newEntry = {
      ...this.state.entry,
      description: event.target.value,
    };

    this.setState({
      entry: newEntry,
      isEntryValid: validateEntry(newEntry),
    });
  };

  handleEntryValueChange = event => {
    const newEntry = {
      ...this.state.entry,
      value: parseFloat(event.target.value),
    };

    this.setState({
      entry: newEntry,
      isEntryValid: validateEntry(newEntry),
    });
  };

  render() {
    const actions = [
      <Button
        label="Cancel"
        primary={true}
        onClick={this.props.onRequestClose}
      />,
      <Button
        label="Add"
        primary={true}
        onClick={this.handleEntrySubmission}
        disabled={!this.state.isEntryValid}
      />,
    ];

    return (
      <Dialog
        key="addEntryDialog"
        title="Add Entry"
        actions={actions}
        modal={false}
        open={this.props.isModalOpen}
      >
        <TextField
          id="entryDescription"
          hintText="Description"
          fullWidth={true}
          onChange={this.handleEntryDescriptionChange}
        />
        <TextField
          id="entryValue"
          hintText="Value"
          type="number"
          fullWidth={true}
          onChange={this.handleEntryValueChange}
        />
      </Dialog>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryModal);
