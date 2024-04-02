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

import React, {Component} from "react";
import { View, Text, Image} from "react-native";

// Extends pega uma herança
class App extends Component{ // Criando um componente (App), ou seja, tudo que o Componente tem, o App vai ter
  //Render é mostrar na tela -> renderizar
  //Toda função tem que ter um return
  //Componente é um conjunto de itens; Cada View ou Text é um componente
  render() {
    let curso = 'INFO';

    return(
      <View>
        <Text>Olá mundo!</Text>
        <Text>Exemplo!</Text>
        <Text style={{color: 'blue', fontSize: 30, margin: 15}}>Meu exemplo!</Text>

        <Image source={{url: 'coloca a uri aqui'}} style={{width: 300, height: 300}}/>
        {/* URI é o caminho, url é o link */}
        {/* Image é obrigado a informar a largura e a altura */}
        <Text>{curso}</Text>
        {/* Usa-se chaves'{}' para declarar variáveis */}

        {/* Para chamar o componente */}
        {/* <MinhaImagem /> */}
        {/* Passando propriedades a Largura e a Altura */}
        <MinhaImagem largura={400} altura={400} nome="Imagem 1"/>
        <MinhaImagem largura={200} altura={200} nome="Imagem 3"/>

      </View>
    );
  }
}

// Para a imagem tem que ter o https
export default App;


//Caso queira criar um componente para a img
//Não precisa colocar a view porque é um único componente

class MinhaImagem extends Component{
  render() {
    let img = 'url da imagem';
    return(
      <View>
      {/* <Image source={{uri: img}} style={{width: 300, height:300}}/> */}

        <Image source={{uri: img}} style={{width: this.props.largura, height: this.props.altura}}/>
        {/* this.props = Colocar o valor das propriedades */}
        <Text> {this.props.nome}</Text>
      </View>
    );
  }
}

