import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import HeadNav from '../Components/HeadNav';
import NewsCard from './NewsCard';

const ApiCall = () => {

   

    return (
        <View style={styles.container}>
            <HeadNav />
            {/* <NewsCard/> */}
            <View style={styles.allnews}>
                <NewsCard/>
            </View>
        </View>
    )
}

export default ApiCall

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    allnews:{
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center'
        
    },
   
})