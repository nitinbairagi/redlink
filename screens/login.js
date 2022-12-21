import {useEffect, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {authactions} from '../Redux/Redux';
import {useSelector} from 'react-redux';

function Login({navigation}) {
  const [user, setuser] = useState();
  const [auth1, setauth1] = useState({
    mobile: '',
    password: '',
  });
  const Auth = useSelector(state => state.isAunthenticated);
  //   console.log(Auth);

  const dispatch = useDispatch();
  const LoginHandle = () => {
    dispatch(authactions.Login());
    if (
      JSON.parse(user).mobile === auth1.mobile &&
      JSON.parse(user).password === auth1.password
    ) {
      navigation.navigate('Home');
    }
  };
  //   console.log('4', user);
  //   console.log('34', auth1);

  useEffect(() => {
    AsyncStorage.getItem('userdata').then(res => setuser(res));
  }, []);

  return (
    <>
      {Auth === true ? (
        navigation.navigate('Home')
      ) : (
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#111111',
            }}>
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: '#111111',
              marginBottom: 80,
            }}>
            Sign in to your account
          </Text>

          <TextInput
            placeholder="Mobile"
            style={styles.textinput}
            label="Mobile"
            returnKeyType="next"
            value={auth1.mobile}
            onChangeText={text => setauth1({...auth1, mobile: text})}
            autoCapitalize="none"
            autoCompleteType="cc-number"
            keyboardType="numeric"
            maxLength={10}
          />
          <Text>{/* {mobile.error} */}</Text>
          <TextInput
            placeholder="Password"
            style={styles.textinput}
            label="Password"
            returnKeyType="done"
            value={auth1.password}
            onChangeText={text => setauth1({...auth1, password: text})}
            // error={!!password.error}
            // errorText={password.error}
            secureTextEntry
          />
          {/* <Text style={{display: password.error ? 'flex' : 'none'}}>
            {password.error}
        </Text> */}

          <View style={styles.forgotPassword}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'flex-end',
              marginRight: 20,
              marginTop: 100,
              flexDirection: 'row',
            }}>
            <Pressable onPress={LoginHandle}>
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
                    bottom: 4,
                    alignItems: 'center',
                    marginRight: 5,
                    fontSize: 25,
                    fontWeight: '400',
                    color: '#111111',
                  }}>
                  Login
                </Text>
                {/* <Icon color={'black'} size={30} name={'arrow-forward'} /> */}
              </View>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.link}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    width: 340,
    height: 320,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textinput: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    elevation: 3,
    marginBottom: 10,
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.2,
    fontSize: 20,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 50,
  },
  row: {
    bottom: 10,
    marginVertical: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  forgot: {
    fontWeight: '300',
    fontSize: 15,
    color: 'black',
  },
  link: {
    fontWeight: 'bold',
    color: '#fce517',
  },
});
