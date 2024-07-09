import {Text, TextInput, View, StyleSheet} from "react-native";
import {EvilIcons} from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style={styles.searchBarStyle}>
            <EvilIcons name="search" size={24} color="black" style={styles.iconStyle}/>
            <TextInput
                style={styles.inputStyle}
                placeholderTextColor="grey"
                placeHolder='ara'
                autoCapitalize="none" // Büyük harfle başlamayı kapat
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarStyle: {
        backgroundColor: "lightgrey",
        flexDirection: "row",
        borderWidth: 0,
        borderRadius: 15,
        padding: 5,
        margin: 10,
        height: 50,
        alignItems: "center"
    },
    iconStyle: {
        marginHorizontal: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    }

})
