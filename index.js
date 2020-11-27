/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import storeConfig from './src/store/storeConfig'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Tabs from './src/Navigation';
import rootReducer from './src/store/reducer'
import { CurrentRenderContext } from '@react-navigation/native';

const store = createStore(rootReducer)

const Redux = () => {
    return (
        <Provider store={store}>
            <Tabs />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
