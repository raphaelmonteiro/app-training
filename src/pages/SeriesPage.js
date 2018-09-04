import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import SerieCard from '../components/SerieCard'
import AddSerieCard from '../components/AddSerieCard'

import series from '../../series.json'

const isEven = number => number % 2 === 0

const SeriesPage = props => (
    <View>
        <FlatList 
            data={[...series, { isLast: true }]} 
            renderItem={({item, index }) => (
                item.isLast 
                ? <AddSerieCard 
                    isFirstColumn={isEven(index)} 
                    onPress={() => props.navigation.navigate('SerieForm')} 
                    /> 
                : <SerieCard 
                    serie={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })}
                />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            ListHeaderComponent={props => (<View style={styles.maginTop}/>)}
            ListFooterComponent={props => (<View style={styles.maginBottom}/>)}
        />
    </View>
)

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    maginBottom: {
        marginBottom: 5
    }
})

export default SeriesPage;