import {View, Text} from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";


export  default function SearchScreen() {
    const [searchApi,results]=useResult();
    console.log(results);

    const filterResultsByPrice = (price)=>{
        return results.filter((results)=>{
            return results.price === price
        })
    }

    return (
      <View>
          <SearchBar/>
          <ResultsList
              title="Ucuz Restourantlar"
              results={filterResultsByPrice('₺')} />
          <ResultsList
              title="Uygun Restourantlar"
              results={filterResultsByPrice('₺₺')} />
          <ResultsList
              title="Pahalı Restourantlar"
              results={filterResultsByPrice('₺₺₺')} />
      </View>
    );
}
