import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Tabs from './src/Navigation';
import rootReducer from './src/store/reducer'

const store = createStore(rootReducer)

const Redux = () => {
    return (
        <Provider store={store}>
            <Tabs />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);