import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image  } from "react-native";

import { styles } from './styles';


export default function SignInScreen({ prompAsync }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}> TELA DE LOGIN</Text>



            <Text> ******************************************** </Text>
          
             
            <TouchableOpacity style={styles.buttonGoogle}
              activeOpacity={.5}
              onPress={() => prompAsync()}
              >
              <Image source={require('../../assets/logo.png')} resizeMode='contain' style={{width: 30, height:30 }} />
              <Text>Continue com Google</Text>
          </TouchableOpacity>

        </View>
    );
};
