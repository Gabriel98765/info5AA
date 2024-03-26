// //npm install -g npm@10.5.0

// import React, { Component } from "react";
// import { View, Text } from "react-native";

// function App(){
//   return(

//     //Cada View é uma tela ou fragmento de tela
//     <View> 
//       <Text>Olá mundo!</Text>
//     </View>
//   );
// }

// //Depois de criar tem que colocar o export
// export default App; //Poderia colocar antes da function; Export indica quando a função vai ser executada

// Extends pega uma herança
class App extends Component{ // Criando um componente (App), ou seja, tudo que um componente tem, o App vai ter
  //Render é mostrar na tela -> renderizar
  //Toda função tem que ter um return
  render() {
    let curso = 'INFO';

    return(
      <View>
        <Text>Olá mundo!</Text>
        <Text>Exemplo!</Text>
        <Text style={{color: 'blue', fontSize: 30, margin: 15}}>Meu exemplo!</Text>

        <Image source={{url: 'coloca a url aqui'}} style={{width: 300, height: 300}}/>
        {/* Image é obrigado a informar a largura e a altura */}
        <Text>{curso}</Text>
      </View>
    )
  }
}


