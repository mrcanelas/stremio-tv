import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Settings, Search } from "react-native-feather";
import { scale } from '../../utils/NomalizeSize';

export default function HorizontalNavBar() {
    return (
        <View style={styles.container}>
            <View style={styles.leftConteiner}>
                <Text style={styles.stremioLogo}>STREMIO.</Text>
                <Text style={styles.stremioSubtitle}>All you can watch.</Text>
            </View>
            <View style={styles.rigthConteiner}>
                <Pressable>
                    <Image style={styles.userImage}
                        source={{ uri: 'https://github.com/mrcanelas.png' }} onPress={{}} />
                </Pressable>
                <Pressable>
                <Settings style={{ marginHorizontal: scale(20) }} color="white" width={scale(25)} height={scale(25)}></Settings>
                </Pressable>
                <View style={styles.searchBox}>
                    <TextInput style={styles.searchInput}
                        placeholder="Search or paste links" />
                    <Pressable>
                        <Search style={styles.searchIcon} color="white" width={scale(25)} height={scale(25)}></Search>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginVertical: scale(40), marginHorizontal: scale(110), alignItems: 'center' },
    leftConteiner: { flexDirection: 'row', width: "50%", alignItems: 'center' },
    rigthConteiner: { flexDirection: 'row-reverse', width: "50%", alignItems: 'center' },
    searchBox: { flexDirection: 'row', borderBottomWidth: 1, backgroundColor: "#211B2A", borderRadius: scale(50), width: '75%', alignItems: 'center' },
    userImage: { width: scale(40), height: scale(40), borderRadius: scale(20), },
    stremioLogo: { fontFamily: 'Inter_700Bold', fontSize: scale(26), color: 'white' },
    stremioSubtitle: { fontFamily: 'Inter_100Thin', fontSize: scale(12), color: 'white', marginLeft: scale(10) },
    searchInput: { flex: 1, fontFamily: 'Inter_700Bold', fontSize: scale(16), color: 'white', marginVertical: scale(15), marginLeft: scale(10) },
    searchIcon: { marginHorizontal: scale(12) },
});