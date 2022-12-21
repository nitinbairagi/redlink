import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

function List() {
  const data = useSelector(state => state.list.data);
  console.log('23', data);

  const dataHanle = data => {
    const deleteHandle = () => {
      console.log(data.index);
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          width: 310,
          height: 40,
          elevation: 5,
          borderWidth: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          borderColor: 'white',
          marginBottom: 5,
        }}>
        <Text style={{fontSize: 18}}>Title:- {data.item.value}</Text>
        <Text onPress={deleteHandle} style={{fontSize: 18}}>
          Delete
        </Text>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center', backgroundColor: 'grey', flex: 1}}>
      <FlatList data={data} renderItem={dataHanle} />
    </View>
  );
}

export default List;
