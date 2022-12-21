import {useState} from 'react';
import {Button, FlatList, Pressable, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataaction} from '../Redux/Redux';
import {useEffect} from 'react';

function Home({navigation}) {
  const [state, setstate] = useState({value: ''});
  //   let [data, setdata] = useState([]);
  //   useEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => {
  //         return <Button onPress={() => console.log('23')} title="LIst"></Button>;
  //       },
  //     });
  //   }, [navigation]);

  const listdata = useSelector(state => state.list.data);
  //   console.log('list', listdata);

  const dispatch = useDispatch();
  const AddHandler = () => {
    console.log(state);
    dispatch(dataaction.addData(state));
  };
  //   console.log(data);

  function dataHandler(data) {
    console.log(data);
    return (
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          width: 300,
          margin: 10,
          padding: 5,
          height: 30,
          borderRadius: 10,
          borderColor: 'white',
          backgroundColor: 'white',
          elevation: 5,
        }}>
        <Text style={{fontSize: 15}}>Title:{data.item.value}</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
      }}>
      <TextInput
        style={{
          width: 300,
          height: 40,
          borderWidth: 2,
          backgroundColor: 'white',
          borderRadius: 15,
          borderColor: 'white',
          elevation: 4,
        }}
        onChangeText={i => {
          setstate({...state, value: i});
        }}
      />
      <Pressable onPress={AddHandler}>
        <Text
          style={{
            elevation: 4,
            fontSize: 20,
            marginTop: 20,
            borderWidth: 1,
            width: 90,
            // justifyContent: 'center',
            // alignItems: 'center',
            textAlign: 'center',
            borderRadius: 15,
            backgroundColor: '#cccccc',
            borderColor: 'white',
            // height: 50,
          }}>
          Add
        </Text>
      </Pressable>
      <FlatList renderItem={dataHandler}></FlatList>
    </View>
  );
}
export default Home;
