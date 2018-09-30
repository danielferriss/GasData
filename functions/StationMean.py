import csv
import operator
import matplotlib.pyplot as plt


def find_over_under(filename, gastype):
	stations = {}
	count = 0
	totalmean = 0
	stationcount = 0

	with open(filename) as csv_file:
		csv_reader = csv.reader(csv_file, delimiter=',')
		for row in csv_reader:
			if count != 0 and gastype.lower() in row[30].lower():
				countmean = []
				price = float(row[38])
				curr = row[24]
				countmean.append(1)
				countmean.append(price)
				totalmean += price
				if curr in stations:
					stations[curr][0] += 1
					stations[curr][1] = stations[curr][1] + price
				else:
					stations[curr] = countmean
				stationcount += 1
			count += 1

	totalmean = totalmean/stationcount
	stationmeans = {}

	for key in stations:
		mean = stations[key][1] / stations[key][0]
		mean = round(mean-totalmean, 2)
		stationmeans[key] = mean
	return stationmeans


#Examples of the method.  Uncomment to see how it prints.
#print(find_over_under("fuel_card_export.csv", "diesel"))
#print(find_over_under("fuel_card_export.csv", "unleaded"))





