#!/bin/bash

cd mai_middleware

docker-compose down

git checkout develop
git pull origin develop

docker-compose up -d
