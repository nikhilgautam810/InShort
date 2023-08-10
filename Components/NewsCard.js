import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchNews, selectNews } from './redux/NewsSlice';

const NewsCard = () => {
    const [newsData, setNewsData] = useState();
    const getApiData = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=US&category=general&apiKey=1ab75809abd2419c9018382ba256ef78');
            const result = await response.json();
            setNewsData(result.articles);


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatch(fetchNews());
    }, [])

    
    return (

        <FlatList
            data={newsData}
            bounces={false}

            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return (
                    <View style={styles.newscardouter}>
                        <Image source={{ uri: item.urlToImage }} style={styles.img} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => { Linking.openURL(item.url) }}>
                            <Text style={styles.readmore}>Read More {'>'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.bbw}></Text>
                    </View>
                );
            }} />


    )
}

export default NewsCard

const styles = StyleSheet.create({
    newscardouter: {
        backgroundColor: '#fff',
        // height:700,
        width: '100%',
        alignSelf: 'center',
        elevation: 10,
        marginBottom: 20,

    },
    img: {
        width: '100%',
        height: 300,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        margin: 5
    },
    description: {
        fontSize: 18,
        color: '#000',
        fontWeight: '300',
        margin: 10
    },
    readmore: {
        fontSize: 15,
        fontWeight: '200',
        color: '#000',


    },
    btn: {

        bottom: 5,
        margin: 5,
        height: 40,
        width: '95%',
        // backgroundColor:'#CCC',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bbw: {
        borderBottomWidth: 1,
        width: "95%",
        alignSelf: 'center'

    }
})