#!/bin/bash

cat requirements.txt | xargs npm install --save
npm start