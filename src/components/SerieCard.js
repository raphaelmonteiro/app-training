import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity } from 'react-native'

const SerieCard = ({ serie, isFirstColumn, onNavigate }) => (
    <TouchableOpacity 
        onPress={onNavigate}
        style={[
            styles.container, 
            isFirstColumn ? styles.firstColumn : styles.secondColumn
        ]}
    >
        <View style={styles.card}>
            <Image 
                source={{uri: serie.img}}
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={styles.cardTitleWrap}>
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
        borderWidth: 1
    },
    cardTitleWrap:{
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: .8,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 3,
        paddingLeft: 3,
        alignItems: 'center'
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    firstColumn: {
        paddingLeft: 10
    },
    secondColumn: {
        paddingRight: 10
    }
})

export default SerieCard;