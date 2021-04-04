
#### Configuración Blue Bank

+ Base de datos
    + sql
	En la carpeta llamada base de datos se encuentra el sql para la creación de la base de datos llamada BlueBank, se inicia un nuevo query y se abre el sql con sql server 2012 excute.
+ Back Blue Bank
    + Se abre la carpeta llamada BackBlueBank y se busca un archivo con el mismo nombre de la carpeta pero con la extención .sln se tiene que tener instalado visual studio preferiblemente 2019.
    + Para ejecutar el back se tiene que editar dos archivos llamados AplicationDbContext.cs y appsettings.Development.json, en el primer archivo se busca la linea numero 28 la cual se pondra la conexión a la base de datos esta se puede obtener en explorador de servidor, conectar con la base de datos, al tener conectada se da click derecho en la base y se ecoje la opción de propiedades y va a lo opción de dirección de conexión.En el segundo archivo con la extención .json se pone la misma dirección en la linea numero 10.
	+ Por ultimo se da compilar y se esta iniciaria en el puerto 44345.
+ Front Blue Bank
    + Se da clonar desde git, se abre el cmd del equipo y se ejecuta como administrador se dirije a la carpeta donde se clono y se escribe el comando npm install y al terminar se escribe el comando npm start esto iniciara el servidor de la aplicación en el puerto 4200.
#### Nota: Para que la aplicación funcione correctamente los dos proyectos deben estar corriendo al mismo tiempo.
	
- Negocio y tecnología
		Se utilizo un modelo de entidad de relación con cardinalidad de 1 a n la cual funciona con la caracteristica que un cliente puede tener varias cuentas en simultaneo.
		Se utilizo c# y con api rest para la construcción de los controladores y con un scaffold para la conexión y la construcción de los modelos.
		Para el front se utilizo angular esta esta constituido por html css y typeScript el cual se encarga de el manejo del html
		El motor de base de datos que se uso para la construcción de la aplicación fue SQL Server Management Studio 2012.
- Arquitectura
		La arquitectura que se uso fue de vista y controlador (mvc) la cual esta constituida por el back realizado en c# el cual se encarga de obtener los datos y conexión a la base de datos y el front el cual se encarga de la visualización.
- Tal vez
		Si se tuviera mas tiempo se podría incluir tener más tipos de cuentas y mas servicios como traspasos a otras cuentas y una descarga de factura de movimientos realizados en la aplicación.


#### Video
https://www.youtube.com/watch?v=WCB-rUzLU38
