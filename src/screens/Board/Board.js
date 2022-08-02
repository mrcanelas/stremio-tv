import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CarroulselMenu from "./CarroulselMenu";
import ContinueWatching from "./ContinueWatching";
import HorizontalNavBar from "./HorizontalNavBar";

export default function Board({navigation}) {
    return (
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0.00, 0.30, 0.70, 0.99]}
                    colors={['#0E0B13', '#0E031F', '#0E031F', '#0E0B13']}
                    style={styles.background}
                >
                    <ScrollView>
                    <HorizontalNavBar/>
                    <CarroulselMenu/>
                    <ContinueWatching/>
                    </ScrollView>
                </LinearGradient>
            </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});