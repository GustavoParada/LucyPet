import React from "react";
import { Text, View } from "react-native";
import Location from '../components/Location'
import MiniMap from "../components/MiniMap";

export default function MapScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MiniMap />
        </View>
    );
}