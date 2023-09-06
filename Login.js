import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { Formik,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginScreen = ({ navigation }) => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
const [erormodal,sererrormodal]=useState(false);
  const handleLogin = async (values) => {
    // Your login logic here
    if(values.email="lpaul4440@gmail.com" && values.password=="louis")
    {
        const loginSuccessful = true;
        setSuccessModalVisible(true);
      // Redirect to another page using navigation.navigate()
      navigation.navigate('Home');
    }
    // Replace with actual login logic
else
{
    const loginSuccessful = false;
    sererrormodal(true);

}
   
  };

  return (
    <View>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <View>
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" />


            <Field name="password" placeholder="Password" secureTextEntry />
            <ErrorMessage name="password" />


            <Button title="Login" onPress={handleSubmit} />

            
          </View>
        )}
      </Formik>

      <Modal visible={successModalVisible}>
        <Text>Login Successful!</Text>
        <Button
          title="OK"
          onPress={() => {
            setSuccessModalVisible(false);
            // Redirect to another page using navigation.navigate()
            navigation.navigate('Home');
          }}
        />
      </Modal>
      <Modal visible={erormodal}>
        <Text>Login invalid</Text>
        <Button
          title="OK"
          onPress={() => {
           sererrormodal(false)
            // Redirect to another page using navigation.navigate()
            navigation.navigate('Login');
          }}
        />
      </Modal>
    </View>
  );
};

export default LoginScreen;
