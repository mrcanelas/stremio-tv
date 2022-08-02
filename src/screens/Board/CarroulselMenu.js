import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '../../utils/NomalizeSize';

export default function CarroulselMenu() {
    return (
        <View style={styles.container}>
            <TouchableOpacity><Text style={styles.selectedText}>Library</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.unSelectedText}>Discover</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.unSelectedText}>Settings</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.unSelectedText}>Addons</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: scale(40), marginHorizontal: scale(110), alignItems: 'center'},
    selectedText: { fontFamily: 'Inter_700Bold', fontSize: scale(70), color: 'white', marginRight: scale(20) },
    unSelectedText: { fontFamily: 'Inter_700Bold', fontSize: scale(25), color: '#211B2A', marginRight: scale(20) },
})