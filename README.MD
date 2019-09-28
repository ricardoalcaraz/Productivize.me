
Docker is a requirement to run this application
To run the stack, open a terminal window in the root directory and type:
	docker-compose up --build -d

After it has finished building everything navigate to:
	localhost:37101 
to see the content that is being served up

To stop the application run this command in the root directory
	docker-compose stop

--------------------------------------------------------------------------------------
Other Useful information
--------------------------------------------------------------------------------------

pgadmin is running on port 5050 and can be used to administer the database
	-username is admin@5thcoalition.com
	-password is 1KSA@fnc
	
postgres is running on port 5432
	-user is postgres
	-password is 1KSA@fnc
	
nodejs is running port 3000


Technologies in use:
React
Expressjs/NodeJS
Kubernetes/Docker Swarm
nginx as API gateway and reverse proxy
postgres
Docker