### electron-image-dimensions
Software nativo desenvolvido em javascript para descobrir dimensões das imagens escolhidas.

-----

Neste repositório foi utilizado o nodejs e a dependencia electron.

**Passo a passo:**

1 - Iniciamos o projeto do nodejs utilizando:

`npm init -y`

2 - Foi instalado a dependencia do electron

`npm install --save electron`

3 - Alterado o script no arquivo package.json do nodejs 

de: 
```javascript
"scripts": {
    "teste":  // bla bla bla
  },```` 

para:

```javascript
"scripts": { 
    "start": "electron ."
  },````
