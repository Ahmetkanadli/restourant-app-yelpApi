import {FlatList, Text, TouchableOpacity, View,StyleSheet} from "react-native";
import ResultDetail from "./ResultDetail";
import {useNavigation} from "@react-navigation/native";

export default function ResultsList({title,results}){

    const navigation =useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                //showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({item}) =>{
                    return <TouchableOpacity
                        onPress={()=>navigation.navigate("ResultsShow",{id:item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
        marginBottom :30,
    },
    title:{
        fontSize : 20,
        fontWeight: "bold",
        marginLeft : 15,
        marginBottom : 10
    }
})
