# EJEMPLO-DE-DOCKERS

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Una aplicación para entender y desplegar una imagen utilizando docker

<br>

## Implementación

### Las imágenes de docker:

1. `docker images` Muestra las imágenes.
2. `docker pull {image}` Descarga el paquete y la ultima versión del package.
3. `docker rm {image}` Elimina la imagen.

### Los contenedores que se crean a raiz de la imagen::

1. `docker create {image}` Crea el contendor
2. `docker create --name {nombre_personalizado}` Crea el contendor con nombre personalizado
3. `docket start {id}` Inicia el contendor
4. `docker stop {id}` Para el contenedor
5. `docker ps` list los contenedores funcionando
6. `docker ps -a` List todos los contenedores esten funcionando o no, es decir todos.
7. `docker create -p{puerto_del_pc}:{puerto_de_la imagen_que se quiere mapear} -name {nombre_personalizado} {image}` Crea imagen, sus puertos indicados y su nombre personalizado
8. `docker logs {nombre_del container}` Muestra los logs y finaliza
9. `docker logs --follow {nombre_del container}` Persiste su visualización constantemente
10. `docker run {image}` Pone a correr la imagen
11. `docker run -d {image} la -d` Pone a correr la imagen y hace que le devuelva solo el ID y no lo deje en logs
12. `docker run --name {nombre_personalizado} -p{puerto_del_pc}:{puerto_de_la imagen_que se quiere mapear} -d {image}` Crea imagen y la pone a correr de una vez, sus puertos indicados y su nombre personalizado y por ultimo -d para indicarle que no lo deje en los logs.


### Creandoo imágenes a partir del archivo Dockerfile
1. `docker build -t {nombre_de_la_image}:{etiqueta}` Crea imágenes en base de los archivos Dockerfile, el punto al final indica la ruta donde se esta
2. `docker create -p27017:27017 -name {nombre_personalizado} -e MONGO_INITDB_ROOT_USERNAME={username} -e MONGO_INITDB_ROOT_PASSWORD={password} {imagen}` Crea la configuración necesaria para conectarse a la app de mongo

### Creando redes y enlazando internamente los contenedores:
1. `docker network ls` Lista las redes
2. `docker network create {nombre}` Crea la red

### Se crean contenedores pasandole la flag de la red para enlazarlo internamente
1. `docker create -p27017:27017 -name {nombre_personalizado} --network {nombre_de_la_red} -e MONGO_INITDB_ROOT_USERNAME={felipe} -e MONGO_INITDB_ROOT_PASSWORD={password} {imagen}` Crea la configuración necesaria para conectarse a la app de mongo indicandole la red

### Crear todos los pasos anteriores, facilmente con compose
1. `docker compose up` Crea todo lo anterior
2. `docker compose down` Elimina todo el contendor, red

### Volumenes
Guarda la información en el sistema operativo anfitrion:
1. Anonimo, solo se indica la ruta
2. Del anfitrion host
3. El nombrado, se puede referenciar y utilizar donde quiera, como por ejemplo otras APPS

### Como levantar un enviroment de desarrollo
1. Crear archivo Dockerfile.dev
2. Crear archivo docker-compose-dev.yml el cual llama al anterior
3. Y se ejecuta `docker compose -f docker-compose-dev.yml up` Con ello esta escuchando con nodemon cada vez que cambia

<!-- DOCS-IGNORE:start -->

## Colaboradores ✨

Gracias a esta maravillosas persona: ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/22477264?v=4" width="100px;" alt=""/><br /><sub><b>Luis Felipe Cerero Garcia</b></sub></a><br /><a href="https://github.com/FelCer/ejemplo-de-dockers/commits?author=felcer" title="Documentation">📖</td>
  </tr>
</table>

<!-- DOCS-IGNORE:end -->