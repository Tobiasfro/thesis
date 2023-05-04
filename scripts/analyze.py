import sys
import re

def main(file):
    print(file)
    f = open(file, "r")
    flines = f.readlines()

    startString = "Result:"

    resultList = []
    for line in flines:
        if line.startswith(startString):
            result = re.search("(?:(?:[^:]*:){3}\s)([^:]*:\d+)", line).group(1)
            resultList.append(result)

    f.close()
    if "Fundamental" in file:
        tp = open("../dataset/datasetFundamental/truePositiveCases.txt", "r")
    elif "Full" in file:
        tp = open("../dataset/datasetFull/truePositiveCases.txt", "r")
    elif "Updated" in file:
         tp = open("../dataset/datasetUpdated/truePositiveCases.txt", "r")
    else:
        tp = open("../dataset/datasetHalf/truePositiveCases.txt", "r")
    truePositiveDict = {}
    flines = tp.readlines()

    for line in flines:
        if "Fundamental" in file:
            match = re.search("([^:]*:\d+)", line)
        else:
            match = re.search("\/([^:]*:\d+)", line)
        if match:
            truePositiveDict[match.group(1)] = 0

    tp.close()

    tp = 0
    fp = 0
    fn = 0
    print("----------------------\n\nTrue positives:\n")
    for case in resultList:
        if case in truePositiveDict and truePositiveDict[case] < 1:
            print(case)
            tp += 1
            truePositiveDict[case] += 1

    print("----------------------\n\nFalse positives:\n")
    for case in resultList:
        if case not in truePositiveDict:
            print(case)
            fp += 1

    print("----------------------\n\nFalse negatives:\n")
    for key, value in truePositiveDict.items():
        if value == 0:
            fn += 1
            print(key)

    if (tp + fp) == 0:
        precision = "NaN"
    else:
        precision = round((tp / (tp + fp))*100, 1)
    if (tp + fn) == 0:
        recall = "NaN"
    else:
        recall = round((tp / (tp + fn))*100, 1)
    if precision == "NaN" or recall == "NaN":
        fmeasure = "NaN"
    else:
        fmeasure = round(2*(precision*recall)/(precision+recall), 1)

    print(f"\n\nMetrics:\nTP: {tp}\nFP: {fp}\nFN: {fn}\nRecall: {recall}%\nPrecision: {precision}%\nF-Measure: {fmeasure}%")

if __name__ == "__main__":
    main(sys.argv[1])