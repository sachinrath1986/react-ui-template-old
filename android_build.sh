#!/bin/bash

#build the changes
#npm run build

#initiatet the capacitor with builds
npx cap init --web-dir build --npm-client npm react-ui-template com.ionic.app

#build android
npx cap add android
