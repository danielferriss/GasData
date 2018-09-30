import pandas as pd
import numpy as np
import datetime as dt

df = pd.read_csv('data/fuel_card_export.csv')

dropped_values = 0
dropped_rows = 0
data_droped_this_loop = 0
DataDropedbyDriver = {} 


for index, row in df.iterrows():
	data_droped_this_loop = 0
	vehicle = int(row['Vehicle ID'])
	transactiondate = dt.datetime.strptime(row['Transaction Date'], '%m/%d/%Y')

	#Find if year is out of range
	year = int((row['Transaction Date'][6:]))
	if year > 2018 or year < 2010:
		print("Row " + str(index) + "'s Date has been dropped because year " + str(year) + " is out of range.")
		df.loc[index,'Transaction Date'] = -1
		dropped_values += 1
		data_droped_this_loop = 1

	#Find if distance cdriven is out of range
	distance = row['Distance Driven'] 
	if distance > 500 or distance == 0: 
		print("Row " + str(index) + "'s Distance Driven has been dropped because distance " + str(distance) + " is out of range.")
		df.loc[index, 'Distance Driven'] = -1
		dropped_values += 1
		data_droped_this_loop = 1

	#Find if gas is being bouoght
	unit = row['Unit of Measure'] 
	if unit == "EA":
		print("Row " + str(index) + " has been dropped because it is a non-fuel purchase")
		df.drop(index=index, inplace=True)
		dropped_rows += 1
		#data_droped_this_loop = 1 //Non-gas Purchases are not counted against the Vehicle
		
	if data_droped_this_loop == 1:
		df.loc[index,'hasDroppedData'] = 1
		if vehicle not in DataDropedbyDriver:
			DataDropedbyDriver[vehicle] = 1
		else:
			DataDropedbyDriver[vehicle] += 1

	df.loc[index,'Transaction WeekOfYear'] = transactiondate.strftime("%V")

df.to_csv("data/clean_data.csv")
print(str(dropped_values) + " values were dropped.")
print(str(dropped_rows) + " rows were dropped.")
print(" Data Items dropped by vehicle ")
for key, value in sorted(DataDropedbyDriver.items(), key=lambda x: x[0]): 
    print("Vehcile: {} : {}".format(key, value))












