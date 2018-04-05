import React from 'react';
import {View , Text} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallButton from '../Components/SmallButton';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50 ,
    backgroundColor: '#FFF',

  },
  text: {
    fontSize:36,
    marginBottom:15,
    alignSelf: 'center'
  },
  informacoes: {
    alignSelf: 'center'
  }


}

class ProfileManagerScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: [],
      loading: true
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.setState({ loading: true});
    fetch(url)
    .then((response) => {return response.json();})
    .then((json) => {this.setState({profile: json , loading: false});})
  }

  render(){
    return(
      <View style={styles.container}>
      {
        this.state.loading ? (<Text style={styles.text}>Carregando... </Text>) : (
          <View style={styles.informacoes}>
          <Text style={styles.text}>{this.state.profile[0].name}</Text>
          <Text style={styles.text}>{this.state.profile[0].address.zipcode}</Text>
          <Text style={styles.text}>Pediatria</Text>
          <Text style={styles.text}>Hospital do Gama</Text>
          <Text style={styles.text}>Cargo: Gestor</Text>
         <View style={{marginTop: 60}} />
          <AGRButton
           text='Editar'
           onPress = {() => null}
           />

           <SmallButton
           text='Alterar senha'
           onPress = {() => null}
            />

          </View>
        )
      }
      </View>
    )
  }



}



export default ProfileManagerScreen;
