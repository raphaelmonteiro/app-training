import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

import series from '../../series.json'
import SerieCard from '../components/SerieCard'
const isEven = number => number % 2 === 0
const SeriesPage = props => (
    <View>
        <FlatList 
            data={series} 
            renderItem={({item, index }) => (
                <SerieCard 
                    serie={item}
                    isFirstColumn={isEven(index)}
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