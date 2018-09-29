import csv
import operator
import matplotlib.pyplot as plt

cars = {}
times = {}
stations = {}
count = 0

with open('fuel_card_export.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if count != 0:
            curr = row[14]
            currtime = row[8]
            parsedtime = int(currtime[0:2] + currtime[3:5])
            parsedtime = parsedtime - parsedtime%15
            if curr not in cars:
                cars[row[14]] = 1
            else:
                cars[row[14]] += 1
            if parsedtime not in times:
                times[parsedtime] = 1
            else:
                times[parsedtime] += 1
        count += 1

sorted_cars = sorted(cars.items(), key=operator.itemgetter(1))
sorted_times = sorted(times.items(), key=operator.itemgetter(0))

timedict = {}
for key,val in sorted_times:
    timedict[key] = val

frequency = 5
plt.style.use('dark_background')
plt.bar(range(len(sorted_times)), timedict.values(), align="center",color=['#048A81','#06D6A0','#54C6EB','#8A89C0','#CDA2AB'])
plt.xticks(range(len(sorted_times))[::frequency], list(timedict.keys())[::frequency])
ax = plt.gca()
ax.set_facecolor('black')
plt.show()


