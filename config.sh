#! /bin/bash

mkdir db && \
cd server && \
npm i && \
npx prisma generate && \
cd .. && \
docker compose up -d && \