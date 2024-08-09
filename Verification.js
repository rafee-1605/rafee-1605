import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have installed react-native-vector-icons

const Verification = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (code.some(digit => digit === '')) {
      Alert.alert('Please enter the complete code');
    } else {
      Alert.alert('Code confirmed:', code.join(''));
    }
  };

  const handleResend = () => {
    setTimer(60);
    // Add logic to resend the code
  };

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    // Move to next input box if text is entered
    if (text && index < 5) {
      const nextInput = index + 1;
      this[`input_${nextInput}`].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Image source={require('./Assets/Image-3.jpg')} style={styles.image} />
      
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subTitle}>Please confirm the security code received on your mail</Text>
      
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (this[`input_${index}`] = ref)}
          />
        ))}
      </View>
      
      <TouchableOpacity onPress={handleConfirm} style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      
      <View style={styles.resendContainer}>
        <Text>Didn't get the code?</Text>
        {timer > 0 ? (
          <Text style={styles.timer}> {timer}s</Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}> Send again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  image: {
    width: 350, // Adjust width as needed
    height: 250, // Adjust height as needed
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  input: {
    width: 40,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff', // Same color as the login button
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    color: 'red',
    marginLeft: 5,
  },
  resendText: {
    color: '#007bff',
    marginLeft: 5,
  },
});
