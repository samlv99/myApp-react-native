import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import SkiingImage from '../assets/ski.png'

export default function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category List</Text>
      <Image style={styles.categoryImage} source={SkiingImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
    },

    categoryImage: {
        width: 64,
        height: 64,
    },

    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})
