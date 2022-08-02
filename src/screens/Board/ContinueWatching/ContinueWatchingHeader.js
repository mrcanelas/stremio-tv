import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../../utils/NomalizeSize';
import { Play, ChevronRight, ChevronLeft } from 'react-native-feather';

export default function ContinueWatchingHeader() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: "50%", alignItems: 'center' }}>
                <Play style={styles.Icon} fill="white" color="white" width={scale(24)} height={scale(24)}></Play>
                <Text style={styles.continueText}>Continue watching</Text>
            </View>
            <View style={{ flexDirection: 'row-reverse', width: "50%", alignItems: 'center' }}>
                <TouchableOpacity style={styles.showAllIcon}>
                    <Text style={styles.showAllText} >SHOW ALL</Text>
                </TouchableOpacity>
                <ChevronRight style={styles.Icon} width={scale(17)} height={scale(17)} color="white"></ChevronRight>
                <ChevronLeft  style={styles.Icon} width={scale(17)} height={scale(17)} color="#211B2A"></ChevronLeft>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: scale(40), marginHorizontal: scale(110), alignItems: 'center' },
    continueText: { fontFamily: 'Inter_700Bold', fontSize: scale(22), color: 'white', marginRight: scale(20) },
    Icon: { marginRight: scale(10) },
    showAllIcon: { borderColor: "white ", borderStyle: 'solid' },
    showAllText: { fontFamily: 'Inter_700Bold', fontSize: scale(10), color: 'white', marginRight: scale(20) },
    posterImage: { width: scale(100), height: scale(100), borderRadius: scale(5) }
})