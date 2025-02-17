<!-- HEADING -->

<h1 align="center">️PRODUCTIVIZE.ME</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  <span role="img" aria-label="Memo">📝</span>
</h3>
<p align="center">
  <strong>Productivity App.</strong><br>
  Made with <a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://www.docker.com/" target="_blank">Kubernetes</a>, <a href="https://www.nginx.com/" target="_blank">Nginx</a>, & <a href="https://reactjs.org/" target="_blank">ReactJS</a>!
</p>

<!-- QUICK INSTALLATION -->

## <span role="img" aria-label="Sparkles">✨</span> Quick Installation

- Docker is a requirement to run this application!
  - [Installation for Docker](https://docs.docker.com/install/)
- To run the stack, open a terminal window in the root directory and type:
  - `docker-compose up --build -d`
- After it has finished building, to see the content being served, navigate your browser to:
  - `localhost:37101`
- To stop the application run this command in the root directory:
  - `docker-compose stop`


<!-- OTHER USEFUL INFORMATION -->

## <span role="img" aria-label="Sparkles">✨</span> Other Useful Information

- `pgadmin` is running on port `localhost:5050` and can be used to administer the database:
  - Username:
    - `admin@5thcoalition.com`
  - Password: 
    - `1KSA@fnc`
	
- `postgres` is running on port `localhost:5432`:
  - Username:
  	- `postgres`
  - Password:
    - `1KSA@fnc`
	
- `nodejs` is running ports `localhost:3000-3003`:
  - Habits service:
    - `localhost:3001`
  - User services:
    - `localhost:3002` 
  - Authentication services:
    - `localhost:3003`

## <span role="img" aria-label="Personal Computer">💻</span> Developer Tips

- _If you are running a dev environment, make sure that you run `npm i` inside each of the microservices before running `docker-compose up --build -d`._
- _To view logs for a microservice we must enter the container with => `docker exec -it <container_name> <sh|bin/bash>`, then view the logs from the root directory => `cat ../logs/<file_name>.log`._
- We enforce code standards using eslint, you can run it automtically by installing the dependencies by running `npm i` in the root directory. Download eslint for visual studio, settings are configured in the `.vscode` folder.

<!-- CONTRIBUTORS -->

## <span role="img" aria-label="Globe With Meridians">🌐</span> Contributors

- @ricardoalcaraz
- @Ggonryun
- @acfromspace

<!-- LICENSE -->

<!-- ## <span role="img" aria-label="Oncoming Police Car">🚔</span> [License](LICENSE) -->

<!-- The code in this project is under a specific open source license. -->
