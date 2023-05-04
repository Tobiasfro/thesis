#!/bin/sh

for d in ./../dataset/datasetHalf/*/ ; do (cd "$d" && echo "$PWD" && npm install); done
for d in ./../dataset/datasetFull/*/ ; do (cd "$d" && echo "$PWD" && npm install); done
for d in ./../dataset/datasetUpdated/*/ ; do (cd "$d" && echo "$PWD" && npm install); done