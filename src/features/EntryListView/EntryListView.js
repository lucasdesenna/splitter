// @flow
import React, { Component } from 'react';

import styles from './EntryListView.sass';
import EntryList from './EntryList';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddEntryModal from './AddEntryModal';

import CircleType from 'types/Circle.type';

type Props = {
  circle: CircleType,
};

class CircleView extends Component<Props> {
  state: any = {
    isModalOpen: false,
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    return this.props.circle ? (
      <div className={styles.EntryListView}>
        <EntryList entries={this.props.circle.entries} />
        <Button
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
    ) : (
      ''
    );
  }
}

export default CircleView;
