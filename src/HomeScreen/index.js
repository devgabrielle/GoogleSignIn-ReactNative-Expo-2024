import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from "react-native";

import { styles } from './styles';



export default function HomeScreen({ signOut }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title }> HOME SCREENNNN</Text>
    

            <TouchableOpacity
              activeOpacity={.5}
              onPress={() => signOut()}
              >
              <Text style={{color: 'red'}}>   SAIR   </Text>
          </TouchableOpacity>
    
        </View>
    );
};