// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import EntryList from './EntryList';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddEntryModal from './AddEntryModal';

const mapStateToProps = state => ({
    activeCircle: state.activeCircle
});

class CircleView extends Component {
    state: any = {
        isModalOpen: false
    };

    handleOpenModal = () => {
        this.setState({ isModalOpen: true });
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return this.props.activeCircle ? (
            <div>
                <EntryList entries={this.props.activeCircle.entries} />
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

export default connect(mapStateToProps)(CircleView);
