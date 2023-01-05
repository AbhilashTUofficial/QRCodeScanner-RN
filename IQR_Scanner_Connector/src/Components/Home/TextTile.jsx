import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextTile = ({a,b}) => {
  return (
    <View style={textTileStyle.cont}>
      <Text>{a}: {b}</Text>
        </View>
  )
}

export default TextTile


const textTileStyle=StyleSheet.create({
    cont:{
        marginVertical:8,
        marginHorizontal:6,
        borderRadius:6,
        // elevation:2,
        backgroundColor:"white",
        height:36,
        justifyContent:"center",
        padding:6,
    }
})