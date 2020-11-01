import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import { Header } from './src/components/common'

// Custom components

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />

            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({

});

export default App;