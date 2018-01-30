// @flow
import React, { Component } from 'react';

import styles from './EntryListView.sass';
import EntryList from './EntryList';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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
        <FloatingActionButton
          key="addEntryButton"
          onClick={this.handleOpenModal}
        >
          <ContentAdd />
        </FloatingActionButton>
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
