#!/bin/bash

set -a
source .env.production &&

npm ci &&
npm run build &&
# npx prisma migrate deploy &&

pm2 stop financial-compass
pm2 start .output/server/index.mjs --name financial-compass --update-env
