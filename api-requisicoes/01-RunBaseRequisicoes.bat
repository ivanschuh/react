mongod --port 27017 --dbpath ..\baserequisicoes --auth --repair

rem -- sem autenticação -- mongo --port 27018 
rem -- com autenticação -- mongo --port 27018 -u "admin" -p "admin" --authenticationDatabase "baserequisicoes"  
rem -- Compass/Node:  mongodb://admin:admin@localhost:27018/baserequisicoes?authSource=baserequisicoes
