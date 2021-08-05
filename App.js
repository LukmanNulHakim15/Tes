// import axios from 'axios';
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class App extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       data:""
//     }
//   }

//   componentDidMount(){
//     this.getData();
//   }

//   getData(){
//     axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?', {
//       params: {
//         CMC_PRO_API_KEY: '67580df2-a813-458b-87f2-3440a55e615a'
//       }
//     })
//     .then( (response) => {
      
//       this.setState({data:response.data})
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .then(() => {
//       // always executed
//     });  
//   }


//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from "./components"
import Store from './components/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <View>
        <Header/>
      </View>
      </Provider>
    )
  }
}
