#!/bin/bash

cd mai_middleware
docker-compose down
docker-compose up --build -d
