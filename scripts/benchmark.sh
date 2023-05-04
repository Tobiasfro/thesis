#!/bin/sh

resultDir=$PWD"/../results"

dataSetFundamental=$PWD"/../dataset/datasetFundamental/*/"

dataSetHalf=$PWD"/../dataset/datasetHalf/*/"

dataSetFull=$PWD"/../dataset/datasetFull/*/"

dataSetUpdated=$PWD"/../dataset/datasetUpdated/*/"

num=1
result="$resultDir/resultHalf$num.txt"

while [ -e "$result" ]; do
    num=$(( num + 1 ))
    result="$resultDir/resultHalf$num.txt"
done

touch "$result"

num=1
resultFull="$resultDir/resultFull$num.txt"

while [ -e "$resultFull" ]; do
    num=$(( num + 1 ))
    resultFull="$resultDir/resultFull$num.txt"
done

touch "$resultFull"

path=./../dataset/datasetFull/tiny_conf_lib/node_modules/tiny-conf
if [ -f $path/tiny-conf.js ] 
    then mv $path/tiny-conf.js $path/tiny-con.js
fi

num=1
resultUpdated="$resultDir/resultUpdated$num.txt"

while [ -e "$resultUpdated" ]; do
    num=$(( num + 1 ))
    resultUpdated="$resultDir/resultUpdated$num.txt"
done

touch "$resultUpdated"

num=1
resultFundamental="$resultDir/resultFundamental$num.txt"

while [ -e "$resultFundamental" ]; do
    num=$(( num + 1 ))
    resultFundamental="$resultDir/resultFundamental$num.txt"
done

touch "$resultFundamental"

# Run Joern on the basic prototype pollution patterns found in "../dataset/datasetFundamental". Only the constructed prototype pollution query is used 
echo "Starting experiment 1 of 4: basic prototype pollution patterns"
start=`date +%s`
for d in $dataSetFundamental ; do (cd "$d" && ~/Downloads/joern/joern-scan $PWD --overwrite --tags pp --frontend-args --exclude-regex ".*\\\.ts">> $resultFundamental); done
end=`date +%s`
runtime=$((end-start))
minutes=$((runtime/60))
echo "Done with basic prototype pollution patterns"
if [ $runtime -gt 60 ]
then
    echo "Took $minutes minutes"
else
    echo "Took $runtime seconds"
fi
echo "To analyze result run: python3 analyze.py $resultFundamental"

# Run Joern on the 40 NPM packages found in "../dataset/datasetHalf". Only the constructed prototype pollution query is used 
echo "\nStarting experiment 2 of 4: 40 packages"
start=`date +%s`
for d in $dataSetHalf ; do (cd "$d" && ~/Downloads/joern/joern-scan $PWD/node_modules --overwrite --tags pp --frontend-args --exclude-regex ".*\\\.ts">> $result); done
end=`date +%s`
runtime=$((end-start))
minutes=$((runtime/60))
echo "Done with 40 packages"
if [ $runtime -gt 60 ]
then
    echo "Took $minutes minutes"
else
    echo "Took $runtime seconds"
fi
echo "To analyze result run: python3 analyze.py $result"

# Run Joern on the 80 NPM packages found in "../dataset/datasetFull". Only the constructed prototype pollution query is used
echo "\nStarting experiment 3 of 4: 80 packages"
start=`date +%s`
for d in $dataSetFull ; do (cd "$d" && ~/Downloads/joern/joern-scan $PWD/node_modules --overwrite --tags pp --frontend-args --exclude-regex ".*\\\.ts">> $resultFull); done
end=`date +%s`
runtime=$((end-start))
minutes=$((runtime/60))
echo "Done with 80 packages"
if [ $runtime -gt 60 ]
then
    echo "Took $minutes minutes"
else
    echo "Took $runtime seconds"
fi
echo "To analyze result run: python3 analyze.py $resultFull"

# Run Joern on the 10 NPM packages found in "../dataset/datasetUpdated". Only the constructed prototype pollution query is used
echo "\nStarting experiment 4 of 4: Updated packages"
start=`date +%s`
for d in $dataSetUpdated ; do (cd "$d" && ~/Downloads/joern/joern-scan $PWD/node_modules --overwrite --tags pp --frontend-args --exclude-regex ".*\\\.ts">> $resultUpdated); done
end=`date +%s`
runtime=$((end-start))
minutes=$((runtime/60))
echo "Done with updated packages"
if [ $runtime -gt 60 ]
then
    echo "Took $minutes minutes"
else
    echo "Took $runtime seconds"
fi
echo "To analyze result run: python3 analyze.py $resultUpdated"

