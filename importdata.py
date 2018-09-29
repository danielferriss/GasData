import pandas as pd
import numpy as np

df = pd.read_csv('data/fuel_card_export.csv')

dropped_values = 0
dropped_rows = 0

for index, row in df.iterrows():

	#Find if year is out of range
	year = int((row['Transaction Date'][6:]))
	if year > 2018 or year < 2010:
		print("Row " + str(index) + "'s Date has been dropped because year " + str(year) + " is out of range.")
		row['Transaction Date'] = -1
		dropped_values += 1

	#Find if distance cdriven is out of range
	distance = row['Distance Driven'] 
	if distance > 500 or distance == 0: 
		print("Row " + str(index) + "'s Distance Driven has been dropped because distance " + str(distance) + " is out of range.")
		row['Distance Driven'] = -1
		dropped_values += 1

	#Find if gas is being bouoght
	unit = row['Unit of Measure'] 
	if unit == "EA":
		print("Row " + str(index) + " has been dropped because it is a non-fuel purchase")
		df.drop(index=index, inplace=True)
		dropped_rows += 1

df.to_csv("data/clean_data.csv")
print(str(dropped_values) + " values were dropped.")
print(str(dropped_rows) + " rows were dropped.")












