import pandas as pd
import numpy as np
import datetime as dt

df = pd.read_csv('data/fuel_card_export.csv')
NaughtyDrivers = pd.DataFrame( columns= ['Vehicle ID', 'Transaction WeekOfYear','Data_issue','DataDroppedCount'] )

dropped_values = 0
dropped_rows = 0
data_droped_this_loop = 0
row_droped_this_loop = 0
DataDropedbyDriver = {} 


for index, row in df.iterrows():
	data_droped_this_loop = 0
	row_droped_this_loop = 0
	current = 0
	vehicle = int(row['Vehicle ID'])
	transactiondate = dt.datetime.strptime(row['Transaction Date'], '%m/%d/%Y')

	#calculate Week of the Year
	df.loc[index,'Transaction WeekOfYear'] = int(transactiondate.strftime("%V"))

	#Find if year is out of range
	year = int((row['Transaction Date'][6:]))
	if year > 2018 or year < 2010:
		print("Row " + str(index) + "'s Date has been dropped because year " + str(year) + " is out of range.")
		df.loc[index,'Transaction Date'] = -1
		dropped_values += 1
		data_droped_this_loop = 1
		NaughtyDrivers =NaughtyDrivers.append({'Vehicle ID':vehicle, 'Transaction WeekOfYear':int(transactiondate.strftime("%V")),'Data_issue':"Bad Transaction Date",'DataDroppedCount':1}, ignore_index=True)

	#Conform Department ED to EX
	department = (row['Department'])
	if department == "ED":
		print("Row " + str(index) + "'s Department has been changed to EX from ED.")
		df.loc[index,'Department'] = "EX"

	#Conform Product Class to Unleaded  from Unleaded Mid-Grade and	Unleaded Premium
	product_class = (row['Product Class'])
	if product_class == "Unleaded Mid-Grade":
		print("Row " + str(index) + "'s Product Class has been changed to Unleaded from Unleaded Mid-Grade.")
		df.loc[index,'Product Class'] = "Unleaded"
	elif product_class == "Unleaded Premium":
		print("Row " + str(index) + "'s Product Class has been changed to Unleaded from Unleaded Premium.")
		df.loc[index,'Product Class'] = "Unleaded"


	#Find if distance cdriven is out of range
	distance = row['Distance Driven'] 
	if distance > 500 or distance == 0: 
		print("Row " + str(index) + "'s Distance Driven has been dropped because distance " + str(distance) + " is out of range.")
		df.loc[index, 'Distance Driven'] = -1
		dropped_values += 1
		data_droped_this_loop = 1
		NaughtyDrivers =NaughtyDrivers.append({'Vehicle ID':vehicle, 'Transaction WeekOfYear':int(transactiondate.strftime("%V")),'Data_issue':"Bad Distance Driven",'DataDroppedCount':1}, ignore_index=True)

	#Based on Fuel Purchased,  distance driven is wrong
	#TODO desiel_conforming_milage = int()
	#TODO unleaded_conforming_milage = int()



	#Find if gas is being bouoght
	unit = row['Unit of Measure'] 
	if unit == "EA":
		print("Row " + str(index) + " has been dropped because it is a non-fuel purchase")
		df.drop(index=index, inplace=True)
		dropped_rows += 1
		row_droped_this_loop = 1
		#data_droped_this_loop = 1 //Non-gas Purchases are not counted against the Vehicle

	if row_droped_this_loop == 0:	
		if data_droped_this_loop == 1:
			df.loc[index,'hasDroppedData'] = 1
			if vehicle not in DataDropedbyDriver:
				DataDropedbyDriver[vehicle] = 1
			else:
				DataDropedbyDriver[vehicle] += 1


#Begin Statistical data Add

#Begin Weekly Standard Dev and Average price of gas
for week in df['Transaction WeekOfYear'].unique():
	print("Calculating Weekly statistics" + str(week))
	unleadedavgPrice = -1
	e85Averageprice = -1
	deiselaverageprice = -1
	unleadedavgPrice = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='Unleaded')]['Unit Cost'].mean()
	e85Averageprice = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='E-85')]['Unit Cost'].mean()
	deiselaverageprice = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='Diesel')]['Unit Cost'].mean()
	unleadedstedev = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='Unleaded')]['Unit Cost'].std(axis=0,skipna=True)
	e85stedev = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='E-85')]['Unit Cost'].std(axis=0,skipna=True)
	deiselstedev = df[(df['Transaction WeekOfYear']==week) & (df['Product Class']=='Diesel')]['Unit Cost'].std(axis=0,skipna=True)
	print( ""+str(unleadedavgPrice) + " " + str(e85Averageprice) + " " + str(deiselaverageprice))
	for index2, row2 in df.iterrows():
		if int(row2['Transaction WeekOfYear']) == int(week): 
			df.loc[index2,'unleadedavgPrice'] = unleadedavgPrice
			df.loc[index2,'e85Averageprice'] = e85Averageprice
			df.loc[index2,'deiselaverageprice'] = deiselaverageprice
			df.loc[index2,'unleadedstedev'] = unleadedstedev
			df.loc[index2,'e85stedev'] = e85stedev
			df.loc[index2,'deiselstedev'] = deiselstedev

#Mark records that are Lower the one Standard deviation from Agerage



df.to_csv("data/clean_data.csv")
print(str(dropped_values) + " values were dropped.")
print(str(dropped_rows) + " rows were dropped.")
print(" Data Items dropped by vehicle ")
NaughtyDrivers.to_csv("data/dropeddatabydriver.csv")
for key, value in sorted(DataDropedbyDriver.items(), key=lambda x: x[0]): 
    print("Vehcile: {} : {}".format(key, value))












