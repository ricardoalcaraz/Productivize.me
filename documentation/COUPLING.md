Changing ports of the API needs to be changed in nginx and in the .env file

The name of the db in docker must match the name of the db host we want to sign into for postgres

Changing the file location of the api requires you to change directories inside of the docker-compose file.

nginx dockerfile contains references to the name of the folder that contains the html contents it needs to render.

environment values have a direct 1:1 mapping inside each microservice's settings folder.

the nginx context in the docker-compose file must be set to the root directory otherwise nginx can't access files outside of it's context. This is because nginx is closely coupled with the client folder.