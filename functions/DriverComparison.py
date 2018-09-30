import csv
import operator
import json

def compare_drivers(filename, category):
	count = 0
	drivers = {}
	with open(filename) as csv_file:
		csv_reader = csv.reader(csv_file, delimiter=',')
		line_count = 0
		for row in csv_reader:
			if count != 0 and len(row[62]) != 0 and float(row[62]) != -1:
				counttotal = []
				counttotal.append(1)
				counttotal.append(float(row[category]))
				curr = row[1]
				if curr not in drivers:
					drivers[curr] = counttotal
				else:
					drivers[curr][0] += 1
					drivers[curr][1] += float(row[category])
			count += 1
		count -= 1 #offset by 1 because we don't count first line

	drivertotals = {}
	for key in drivers:
		drivertotals[key] = drivers[key][1]
		drivertotals[key] = round(drivertotals[key], 2)

	sorted_drivers = sorted(drivertotals.items(), key=operator.itemgetter(1), reverse=True)

	return sorted_drivers

with open('driverresult.json', 'w') as fp:
	json.dump(compare_drivers('../data/clean_data.csv', 62), fp)

#Uncomment the line below to see an example
#The category parameter is the index of the category in the csv file
#Ex: category 61 corresponds to the "Distance Driven" category 
#print(compare_departments('../data/clean_data.csv', 63))

