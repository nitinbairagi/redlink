import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authactions} from '../Redux/Redux';

function Register({navigation}) {
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    mobile: '',
  });
  console.log(state);

  //   const dispatch = useDispatch();
  //   const Auth = useSelector(state => state.isAunthenticated);

  const CreateHandler = () => {
    AsyncStorage.setItem('userdata', JSON.stringify(state));
    Alert.alert('account created sucessfully');
    navigation.navigate('Login');
  };
  return (
    <>
      {/* <LinearGradient colors={['#fce517', '#cccccc']} style={{flex: 1}}> */}
      <ScrollView>
        {/* <View>{loader}</View> */}
        <View style={styles.container}>
          <Text
            style={{
              color: '#000000',
              fontSize: 30,
              marginBottom: 40,
              fontWeight: 'bold',
            }}>
            Create Account
          </Text>
          <View>
            <TextInput
              placeholder="Name"
              style={styles.textinput}
              value={state.name}
              onChangeText={e => setState({...state, name: e})}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textinput}
              value={state.mobile}
              onChangeText={e => setState({...state, mobile: e})}
              keyboardType="numeric"
              maxLength={10}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Email address"
              value={state.email}
              onChangeText={e => setState({...state, email: e})}
              keyboardType="Email-address"
            />
            <TextInput
              style={styles.textinput}
              value={state.password}
              placeholder="Password"
              onChangeText={e => setState({...state, password: e})}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.textinput}
              value={state.confirmpassword}
              placeholder="Confirm password"
              onChangeText={e => setState({...state, confirmpassword: e})}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.Button}>
            <Pressable onPress={CreateHandler}>
              <View
                style={{
                  backgroundColor: '#fce517',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 5,
                  width: 300,
                  height: 50,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    bottom: 1,
                    alignItems: 'center',
                    marginRight: 5,
                    fontSize: 25,
                    fontWeight: '400',
                    color: '#111111',
                  }}>
                  Create
                </Text>
                {/* <Icon color={'black'} size={30} name={'arrow-forward'} /> */}
              </View>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#fce517', fontSize: 16, fontWeight: 'bold'}}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {/* </LinearGradient> */}
    </>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    width: 340,
    alignSelf: 'center',
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textinput: {
    elevation: 3,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    marginBottom: 5,
    marginTop: 5,
    width: 310,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
  },

  Button: {
    marginTop: 80,
    width: 100,
    flexDirection: 'row',
    marginRight: 15,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 100,
  },
  error: {
    // width: '100%',
    color: 'red',
  },
});
