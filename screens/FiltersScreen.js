import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

import colors from '../constants/colors';

const FilterSwicth = props => {
    return (
         <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    trackColor={{true: colors.accentColor}}
                    thumbColor='#ccc'
                    value={props.value} 
                    onValueChange={props.onChange} 
                />
        </View>
    )
}

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            Vegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwicth label='Gluten-free' value={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwicth label='Lactose-free' value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwicth label='Vegan' value={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwicth label='Vegetarian' value={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {flex: 1, alignItems: 'center'},
    title: {fontFamily: 'open-sans-bold', fontSize: 22, margin: 20, textAlign: 'center'},
    filterContainer: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginVertical: 15}
});

export default FiltersScreen;