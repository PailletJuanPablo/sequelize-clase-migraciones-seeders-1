# Sequelize: Migraciones y Seeders
## Objetivo: Crear un sistema para gestionar una inmobiliaria

1) Crear el proyecto con express
```sh
        express --ejs 
```
2) Definir entidades (tablas y sus relaciones en el sistema)

- propiedades
    - direccion
    - city_id
    - metros
    - precio
    - currency_id
    - name
    - imagen_principal

- imagenes
    - url
    - property_id
    
- ciudades
    - nombre
    - provincia

- monedas
    - nombre
    - simbolo

3) Crear base de datos (por fuera del proyecto)

``` sql
CREATE DATABASE inmobiliaria
```
También pueden crear la base de datos con Workbench

4) Setup de Sequelize y crear las migraciones para impactar en la base

Documentación: https://sequelize.org/master/manual/migrations.html

Las dependencias necesarias son:

```sh
npm i sequelize
npm i mysql2
npm i --save-dev sequelize-cli
```

5) Conectarse a la base de datos especificando las credenciales en el archivo config/config.json

6) Generar los modelos y migraciones con sequelize-cli

```sh
        npx sequelize-cli model:generate --name Property --attributes address:string,city_id:integer,meters:integer,price:decimal,currency_id:integer,name:string,main_image:string
```

```sh
        npx sequelize-cli model:generate --name Image --attributes url:string,property_id:integer
```

```sh
        npx sequelize-cli model:generate --name City --attributes name:string,state:string
```

```sh
        npx sequelize-cli model:generate --name Currency --attributes name:string,symbol:string
```

7) Ejecutar las migraciones

```sh
    npx sequelize-cli db:migrate
```

8) Generamos un seed para las monedas Pesos y Dolares

```sh
    npx sequelize-cli seed:generate --name base-currencies
```

9) Ejecutamos el seed creado

```sh
    npx sequelize-cli db:seed:all
```

10) Definir rutas y controladores

 - Crear carpetas controllers 
 - Agregar a carpeta rutas
 - Un archivo de ruta y un archivo controlador por cada entidad del sistema





