# UTN - Node Intermedio 

_Aquí encontrarás la resolución del TP Optativo 4 del curso de UTN FRBA - Node Intermedio 2020_

## Comenzando 🚀

_Ingresando al siguiente endpoint comienza la interacción con la API de OpenWeather_

```
GET /myWeather?city={ciudad}
```

### Parametros

| Name     | Type       | Description                                        |
|----------|------------|----------------------------------------------------|
|   city   |   `String` | <p>Nombre de la ciudad, para obtener el clima.</p> |


#### Respuesta - `Status Code 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| coord | `Object` | <p>Objeto que contiene Longitud (lon) y Latitud  (lat) de la ciudad</p> |
| cityResponse | `String` | <p>Nombre de la ciudad ingresada.</p> |
| temperature | `Number` | <p>Temperatura actual expresada en ºC.</p> |
| feelsLike | `Number` | <p>Sensación térmica actual expresada en ºC.</p> |


### Instalación 🔧

_Para su instalación, deberás ejecutar el comando NPM INSTALL (Si te encuentras en Windows)_

```
npm install
```

_Puedes utilizar los siguientes comandos para iniciar localmente la aplicación_

_Sin nodemon_
```
npm start
```
_Con nodemon_
```
npm run devstart
```


## Autores ✒️


* **Perez Agustin Gabriel** - *TP Optativo UTN FRBA* - [agusprez](https://github.com/Agusprez)

