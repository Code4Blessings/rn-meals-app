import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = props => {
    return(
        <TouchableOpacity style={styles.gridItems} onPress={props.onSelect}>
            <View style={{
                ...styles.container, 
                ...{backgroundColor: props.color
            }}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItems: {
        flex: 1, 
        margin: 15, 
        height: 125,
        
    },
    container: { 
        flex: 1, 
        borderRadius: 10, 
        shadowColor: 'black', 
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default CategoryGridTile;
