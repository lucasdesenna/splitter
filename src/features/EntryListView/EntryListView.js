// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import sass from './EntryListView.sass';
import EntryList from './components/EntryList';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddEntryModal from './components/AddEntryModal';

import { EntryType } from 'types';

const mapStateToProps = state => ({
  entries: Object.values(state.activeCircle.entries),
  users: state.activeCircle.users,
});

type Props = {
  entries: EntryType[],
  users: any,
};

class CircleView extends Component<Props> {
  state: any = {
    isModalOpen: false,
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <div className={sass.EntryListView}>
        <EntryList entries={this.props.entries} users={this.props.users} />
        <Button
          className={sass.addEntryButton}
          variant="fab"
          key="addEntryButton"
          onClick={this.handleOpenModal}
        >
          <AddIcon />
        </Button>
        <AddEntryModal
          isModalOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CircleView);
