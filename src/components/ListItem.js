import React, { Component } from 'react';
import { Text, View, LayoutAnimation, UIManager, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
    componentDidUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDecription() {
        const { library, expanded } = this.props
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.item.description}</Text>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id

    return { expanded }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default connect(mapStateToProps, actions)(ListItem);