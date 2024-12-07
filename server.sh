#!/bin/bash

set -a
source .env.production

pm2 stop financial-compass
pm2 start .output/server/index.mjs --name financial-compass --update-env
