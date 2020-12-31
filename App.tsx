import React, {useState, useEffect} from "react";
import {View, Text} from "react-native";
import {User} from "./interfaces";
import axios, { AxiosResponse } from "axios";

const App = () => {
  const [userData, setUserData] = useState<User[]>([])
  console.log('User data: ', userData);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        setUserData(response.data)
      })
      .catch(error => console.log(error.message))
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
