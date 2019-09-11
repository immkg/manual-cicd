#!/bin/bash

cd auth-server

docker-compose down

git checkout develop
git pull origin develop

docker-compose up -d
