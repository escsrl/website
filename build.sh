#!/usr/bin/env bash
set -e

APP_ENV=$1

if [[ -z ${APP_ENV} ]]; then
    echo "Environment obbligatorio, valori consentiti: prod, test"
    exit
fi

echo "Creo l'immagine di "${APP_ENV}

if [[ ${APP_ENV} = "prod" ]]; then
   echo "Creo l'immagine con il tag: esconsulting-client:latest"
   docker build . --rm --build-arg APP_ENV=${APP_ENV} -t esconsulting-client:latest
elif [[ ${APP_ENV} = "test" ]]; then
   echo "Creo l'immagine con il tag: esconsulting-cliente-test:latest"
   docker build . --rm --build-arg APP_ENV=${APP_ENV} -t esconsulting-client-test:latest
else
  echo "Comando " ${APP_ENV} " non riconosciuto"
fi
