import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function Setting() {
  const [state, setstate] = useState({});
  console.log(state);

  useEffect(() => {
    const getadat = async () => {
      const data = await AsyncStorage.getItem('userdata');
      setstate(JSON.parse(data));
    };
    getadat();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 300,
          width: 260,
          backgroundColor: 'white',
          borderColor: 'white',
          elevation: 5,
          borderWidth: 1,
          borderRadius: 15,
          justifyContent: 'space-around',
        }}>
        <Text style={{padding: 10, textAlign: 'center', fontSize: 30}}>
          UserProfile
        </Text>
        <Text style={{padding: 10, textAlign: 'left', fontSize: 20}}>
          Name:{state.name}
        </Text>
        <Text style={{padding: 10, textAlign: 'left', fontSize: 20}}>
          Email:{state.email}
        </Text>
        <Text style={{padding: 10, textAlign: 'left', fontSize: 20}}>
          Mobile:{state.mobile}
        </Text>
      </View>
    </View>
  );
}
export default Setting;
