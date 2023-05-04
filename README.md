# prototype-pollution

## Installation

Following installation process only tested in WSL2 with Ubuntu 22.04

### Prerequisites

* Python v3.10
* Node v18.13
* Java JDK 17

### Setting up Joern

* Install the [scala build tool](https://www.scala-sbt.org/download.html)

* Clone the forked [Joern](https://github.com/Tobiasfro/joern) repository to the Downloads folder

* Type: cd Joern

* Type: sbt stage

* Type: ./querydb-install.sh

## Run experiments

Make sure you followed the installation process before trying to run the experiments

* Move to the script folder with: cd scripts

* Create dataset with: ./install-dependencies.sh

* Run experiments with: ./benchmark.sh

* Analyze the result using analyze.py. Replace 'X' below with the run number you want to analyze. If ./becnhmark.sh have only been run once, 'X' should be replaced with '1'

    * Analyze the result of the experiment using 40 packages with: python3 analyze.py ../results/resultHalfX.txt

    * Analyze the result of the experiment using 80 packages with: python3 analyze.py ../results/resultFullX.txt

    * Analyze the result of the experiment using updated packages with: python3 analyze.py ../results/resultUpdatedX.txt
    
    * Analyze the result of the experiment using simple PoC programs with: python3 analyze.py ../results/resultFundamentalX.txt

In order to test the CodeQL queries, the easiest way is to use the Docker container found in the [silent-spring](https://github.com/yuske/silent-spring) repository. To test with for example the updated packages, copy that dataset from this repository to the docker container and run the wanted queries as described in the silent spring repository.