import React from 'react';
import axios from 'axios';
import { Text, View, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Clock, User } from "react-native-feather";
import timeConvert from '../../utils/TimeConvert';
import {scale} from '../../utils/NomalizeSize'
import { useRoute } from '@react-navigation/native';

export default function MetaDetails() {
    const route = useRoute()
    const id = route.params.id
    const [meta, setMeta] = React.useState(null);

    React.useEffect(() => {
        axios.get(`https://v3-cinemeta.strem.io/meta/movie/${id}.json`).then((response) => {
            setMeta(response.data);
        });
    }, []);

    if (!meta) return null;

    return (
        <ImageBackground source={{ uri: `${meta.meta.background}` || "http://github.com/mrcanelas.png" }} style={styles.background}>
            <ScrollView>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0.00, 0.40, 0.60, 1.00]}
                    colors={['black', 'transparent', 'transparent', 'black']}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <Image source={{ uri: `${meta.meta.logo}` }} style={styles.logo} />
                        <View style={styles.infoConteiner}>
                            <TouchableOpacity style={styles.imdbConteiner} onPress={() => alert("test", "testee")}>
                                <Text style={styles.imdbText}>IMDb</Text>
                            </TouchableOpacity>
                            <Text style={styles.imdbScore}>{meta.meta.imdbRating}</Text>
                            <Clock style={styles.clockIcon} color="white" width={scale(18)} height={scale(18)}></Clock>
                            <Text style={styles.runtime}>{timeConvert(meta.meta.runtime)}</Text>
                            <User style={styles.userIcon} color="white" width={scale(18)} height={scale(18)}></User>
                            <Text style={styles.ageRating}>M/14</Text>
                        </View>
                        <Text style={styles.textTilte}>CAST</Text>
                        <View style={{ flexDirection: 'row', marginTop: scale(18) }}>
                            {meta.meta.cast.map((actor, index) =>
                                <TouchableOpacity style={styles.label} opacity={0.8}>
                                    <Text style={styles.labelText} key={index.toString()}>{actor}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <Text style={styles.textTilte}>DIRECTOR</Text>
                        <View style={{ flexDirection: 'row', marginTop: scale(18) }}>
                            {meta.meta.director.map((director, index) =>
                                <TouchableOpacity style={styles.label} opacity={0.8}>
                                    <Text style={styles.labelText} key={index.toString()}>{director}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <Text style={styles.textTilte}>SYNOPSIS</Text>
                        <View style={{ flexDirection: 'row', marginTop: scale(18), width: '35%' }}>
                            <Text style={styles.descriptinText}>{meta.meta.description}</Text>
                        </View>
                        <View>
                            
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: { marginTop: scale(50), marginLeft: scale(105), marginRight: scale(100) },
    infoConteiner: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    logo: { flex: 1, width: scale(400), height: scale(155), marginRight: scale(15), marginBottom: scale(15) },
    imdbConteiner: { marginTop: scale(2), backgroundColor: "#EFD05B", borderRadius: scale(6), width: scale(55), height: scale(35), alignItems: 'center', justifyContent: 'center' },
    imdbText: { fontFamily: 'Inter_900Black', fontSize: scale(14), color: 'black' },
    imdbScore: { fontFamily: 'Inter_600SemiBold', fontSize: scale(15), color: 'white', marginLeft: scale(11) },
    clockIcon: { marginLeft: scale(28), },
    runtime: { fontFamily: 'Inter_600SemiBold', fontSize: scale(14), color: 'white', marginLeft: scale(11) },
    userIcon: { marginLeft: scale(28), },
    ageRating: { fontFamily: 'Inter_600SemiBold', fontSize: scale(14), color: 'white', marginLeft: scale(11) },
    textTilte: { fontFamily: 'Inter_700Bold', fontSize: scale(14), color: 'white', marginTop: scale(35) },
    label: { backgroundColor: "#353535", marginRight: 8, borderRadius: 20 },
    labelText: { marginVertical: scale(8), marginHorizontal: scale(30), fontFamily: 'Inter_300Light', fontSize: scale(11), color: 'white' },
    descriptinText: { fontFamily: 'Inter_100Thin', fontSize: scale(14), color: 'white', textAlign: 'justify', lineHeight: scale(30), }
})