import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

const Lists = (props) => {

    const {item} = props

    return (
        <View style={styles.listContainer}>
            <Text>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer : {
        padding:10,
        marginVertical:5,
        backgroundColor:"#fff",
        shadowColor:"gray",
        shadowOffset:1
    }
})

export default Lists
