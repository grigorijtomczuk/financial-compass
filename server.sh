#!/bin/bash

export NITRO_SSL_CERT="`cat /etc/ssl/certs/financial-compass-app_ru.crt`"
export NITRO_SSL_KEY="`cat /etc/ssl/private/financial-compass-app_ru.key`"
export PORT=443
export NODE_ENV=production

exec pm2 start .output/server/index.mjs --name financial-compass
