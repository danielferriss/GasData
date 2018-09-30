import csv
import operator
import matplotlib.pyplot as plt

def compare_departments(filename, category):
	count = 0
	departments = {}
	with open(filename) as csv_file:
		csv_reader = csv.reader(csv_file, delimiter=',')
		line_count = 0
		for row in csv_reader:
			if count == 0:
				plt.ylabel(row[category])
			if count != 0:
				counttotal = []
				counttotal.append(1)
				counttotal.append(float(row[category]))
				curr = row[5]
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

	plt.style.use('dark_background')
	plt.bar(range(len(deptmeans)), deptmeans.values(), align="center",color=['#048A81','#06D6A0','#54C6EB','#8A89C0','#CDA2AB'])
	plt.xticks(range(len(deptmeans)), list(deptmeans.keys()))
	ax = plt.gca()
	ax.set_facecolor('black')
	plt.xticks(rotation=30)
	plt.show()
	return deptmeans

#Uncomment the line below to see an example
#The category parameter is the index of the category in the csv file
#Ex: category 61 corresponds to the "Distance Driven" category 
print(compare_departments('fuel_card_export.csv', 61))