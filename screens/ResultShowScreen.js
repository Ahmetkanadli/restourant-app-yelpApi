import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import {useEffect, useState} from "react";
import yelpApi from "../api/yelpApi";

export default function ResultShowScreen({route}) {

    const id = route.params.id;

    const [result, setResult] = useState(null);

    const getResult =async (id) => {
        const response = await yelpApi.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }
    console.log(result.photos)

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <FlatList
                data={result.photos}
                renderItem= {({item})=>{
                    return <Image
                        style={{width : 50,height: 50}}
                        source={{uri : item}} />
                }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({})
