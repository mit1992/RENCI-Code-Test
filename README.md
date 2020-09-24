# INTRODUCTION

This problem has been designed to provide you with a glimpse into the
kinds of problems that we solve on the Translational Science team
while also allowing you the opportunity to demonstrate your knowledge
of full-stack programming. The challenge is to create a very simple,
usable client/server web application for presenting 'faux' clinical
data that could be extended and sustained by others.

# GOAL

Display an interactive bar chart using a client/server web application
architecture.

# ENVIRONMENT

There are two containerized applications, 'server' and 'client'. To
build the applications, you will need docker and the following
environmental variables:
```
TX_SERVER_HOST
# host name for 'server' application. Suggest: localhost
TX_SERVER_PORT
# port number for 'server' application. Suggest: 5001
TX_CLIENT_HOST
# host name for 'local' application. Suggest: localhost (for running on same machine as server)
TX_CLIENT_PORT
# port number for 'client' application. Suggest: 8080
```

For your convenience, we offer 'suggested-env.src'; you can edit to
suite your environment.
```
  cp suggested-env.src myenv.src
  # edit myenv.src
```

# RUNNING

You can also run each application individually with docker:
```
  #client:
  pushd project/client
  docker build --tag  client:1.0 .
  docker run -e REACT_APP_DATA_HOST="http://${TX_SERVER_HOST}:${TX_SERVER_PORT}" \
          -e TX_CLIENT_HOST -e TX_CLIENT_PORT -h ${TX_CLIENT_HOST} --rm -it -p ${TX_CLIENT_PORT}:${TX_CLIENT_PORT} client:1.0

 USE 0.0.0.0 instead of localhost for client

  popd
  #server:
  pushd project/server
  docker build --tag  server:1.0 .
  docker run -e TX_SERVER_HOST -e TX_SERVER_PORT -h ${TX_SERVER_HOST} --rm -it -p ${TX_SERVER_PORT}:${TX_SERVER_PORT} server:1.0

  popd
```
Or without docker:
```
  # client:
  pushd project/client/app
  npm install
  npm start
  popd
  # dependancies include node, react, semantic-ui-react

  # server:
  pushd project/server/api
  python server.py
  popd
  # dependancies include flask, flask_cor, python 3
```
Without docker, you will need to install additional dependencies. Both
conda and a virtualenv can facilitate.

# TODO

Complete the items in tasks.txt.  Our intention is for this to take
2-3 hours. You may take more time if you wish.
