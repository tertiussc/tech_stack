import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
    renderDecription() {
        const { library, selectedLibraryId } = this.props

        if (library.item.id === selectedLibraryId) {
            return (
                <CardSection>
                    <Text>{library.item.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library.item

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    < CardSection >
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection >
                    {this.renderDecription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default connect(mapStateToProps, actions)(ListItem);