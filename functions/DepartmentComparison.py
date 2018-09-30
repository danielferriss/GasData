import csv
import operator

def compare_departments(filename, category):
	count = 0
	departments = {}
	with open(filename) as csv_file:
		csv_reader = csv.reader(csv_file, delimiter=',')
		line_count = 0
		for row in csv_reader:
			if count != 0 and len(row[62]) != 0 and float(row[62]) != -1:
				counttotal = []
				counttotal.append(1)
				counttotal.append(float(row[category]))
				curr = row[6]
				if curr not in departments:
					departments[curr] = counttotal
				else:
					departments[curr][0] += 1
					departments[curr][1] += float(row[category])
			count += 1
		count -= 1 #offset by 1 because we don't count first line

	deptmeans = {}
	for key in departments:
		deptmeans[key] = departments[key][1] / departments[key][0]
		deptmeans[key] = round(deptmeans[key], 2)

	return deptmeans

#Uncomment the line below to see an example
#The category parameter is the index of the category in the csv file
#Ex: category 61 corresponds to the "Distance Driven" category 
print(compare_departments('../data/clean_data.csv', 63))