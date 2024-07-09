import {Image, Text, View,StyleSheet} from "react-native";

export default function ResultDetail({result}) {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={result.image_url ?{uri: result.image_url} : null}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Yılzılı Restoran , {result.review_count} değerlendirme
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft : 10,
        marginRight : 10
    },
    image:{
        width : 250,
        height : 150,
        borderRadius : 10,
        marginBottom : 10
    },
    name :{
        fontSize : 18,
        fontWeight: "bold",
    }
})
