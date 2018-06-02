import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import EntryRepo from 'repositories/Entry.repo';
import EntryType from 'types/Entry.type';
import { addEntry } from 'containers/activeCircle.actions';

const mapStateToProps = state => ({
  activeUser: state.activeUser,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddEntry: entryData => {
    dispatch(addEntry(entryData));
    EntryRepo.add(entryData);
  },
});

class AddEntryModal extends Component {
  state = {
    entryDescription: '',
    entryValue: '',
    isEntryValid: false,
  };

  isEntryValid = () =>
    this.state.entryDescription.length >= 5 &&
    parseFloat(this.state.entryValue) > 0;

  handleEntrySubmission = () => {
    this.props.dispatchAddEntry(
      new EntryType({
        description: this.state.entryDescription,
        value: this.state.entryValue,
        userId: this.props.activeUser.id,
      })
    );
    this.props.onRequestClose();
  };

  handleEntryDescriptionChange = event => {
    event.preventDefault();
    const entryDescription = event.target.value;

    this.setState({
      entryDescription: entryDescription,
    });
  };

  handleEntryValueChange = event => {
    event.preventDefault();
    const entryValue = Math.max(parseFloat(event.target.value), 0);

    this.setState({
      entryValue: entryValue.toString(),
    });
  };

  render() {
    return (
      <Dialog
        key="addEntryDialog"
        open={this.props.isModalOpen}
        onClose={this.props.onRequestClose}
      >
        <DialogTitle id="form-dialog-title">Cadastro de despesa</DialogTitle>
        <DialogContent>
          <TextField
            id="entryDescription"
            autoFocus={true}
            placeholder="Descrição"
            fullWidth={true}
            value={this.state.entryDescription}
            onChange={this.handleEntryDescriptionChange}
            margin="normal"
          />
          <TextField
            id="entryValue"
            type="number"
            placeholder="Valor"
            fullWidth={true}
            value={this.state.entryValue}
            onChange={this.handleEntryValueChange}
            margin="normal"
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onRequestClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={this.handleEntrySubmission}
            color="primary"
            disabled={!this.isEntryValid()}
          >
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryModal);
