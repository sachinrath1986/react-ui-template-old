#!/bin/bash

#build the changes
npm run build

#initiatet the capacitor with builds
npx cap init 

#build android
npx cap add android
