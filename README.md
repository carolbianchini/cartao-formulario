<h1>Formulário Cartão de Crédito</h1>

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [O Que Aprendi](#o-que-aprendi)
- [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
- [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)

## Descrição do Projeto 

Formulário de cartão de crédito co validação de dados. 

URL:

![Design sem nome](https://user-images.githubusercontent.com/122060348/235611608-113cd2db-0e66-4665-9395-baba878eebb8.png)


## Tecnologias Utilizadas

`HTML`
`CSS`
`Javascript`


### O Que Aprendi

Ao realizar o projeto tive diversos aprendizados que foram muito enriquecedores, como colocar uma máscara em uma sequência, nesse caso para adicionar os espaços ao cartão. Aprendi a fazer validação de dados de diferentes formas principalmente usando pattern. Utilizando JS aprendi também como fazer ul style tranforme de rotação. 

Segue exemplo, trechos dos códigos abaixo: 

JS

Máscara Num. Cartão
```js
  inputNumero.addEventListener('keypress', () => {
    let inputLength = inputNumero.value.length

    if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
        inputNumero.value += ' '
    }

  })
```

Validação utilizando Pattern
```js
function checkCharNumber(evento) {
    var char = String.fromCharCode(evento.keyCode);
    var patternNumber = '[0-9 ]';
    if (char.match(patternNumber)) {
      return true;
  }
}
```

### Desenvolvimento Contínuo

Para os próximos projetos irei focar mais na disposição dos itens e JS. 

### Recursos Úteis

- [Vídeo Transição Card](https://www.youtube.com/watch?v=G7_VTWnWz40&t=1047s) - Este vídeo me ajudou a fazer a transição do cartão frente e verso. 

## Autor

- Linkedin - [Ana Carolina Bianchini](https://www.linkedin.com/in/ana-carolina-bianchini-desenvolvedora-front-end/)
