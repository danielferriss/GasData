

MP = motor pool
PD = police department
FD = fire department
FI = finance
MP = motor pool
CD = community development
ED = executive department
EX executive Department
PE = parking enforcement
PW = public works




# Champaign Urbana Motor Pool Analysis

This data visualization was made for Pyghack 2018. Our goal was to see if tax dollar usage is being maximized. To start everything off, we wrote a data cleaning program. There were cases in which drivers were reported a driving greater than 900,000 miles in between fill ups.  While cleaning the data we tracked by card to see who was generating the most erroneous data. With this cleaned data, we checked gas prices to see if drivers were going to cheaper gas stations, found average fuel economies for different city departments, and more.

List of Assumptions and objectives
1. In practice the Fleet Fuel Purchasing cards are kept in the vehicles and drives making the purchase are not known.   Because we cannot Identify fuel Purcahases down to Individual Drivers we are using the VehicleID as a Proxy for the Driver.
2. Some vehicles are used almost continously and the driver of the vehicle may change many times throught the day.  We are not able to control for this in the presentation or in the competetive portions of the application
3. Data was aggretaged to the week for most visuals and compititions.   If a Fuel purchase was not made each week that Vehicle ID was not imcluded in the compition for that week
4. Driving Less miles is desireable
5. Driving the vehicle so that it is more fuel efficient is desireable

6. Showing driving data to City drivers may help them to understand the importance of acurate data entry (at the point of sale odomoter reaading )
7. Watching the Fuel Efficiency of individual Vehilces overtime could alert fleet managers of maintenance issues. Such as tire inflation, oil changes, Etc..
8. Mining Fuel price data  could save the city money by identifying gas stations that statisticly have the lowest prices.

## What We Wrote

This is a fullstack application with an easy-to-read data visualization for everything listed above.  It is essentially a Dashboard in its early stages.

Data import with data Cleansing and Data Issue Logging 
    Checks for Invalid Transaction Dates
    Checks for Miles Driven = 0 
    #TODO Check for invalid current odomotor entries based on Prior Vehicle transactions
    #TODO Check for invalid Miles Driven based on Quantity of Fuel purchased and miles driven based on odmotor reading
    Drops transaction rows that are none Fuel purchases
    Creates a data issue report (.csv file) by vehicle ID
    #todo Calculates Milage reports based average on weekly miles
    
### Prerequisites

* Need to have React installed
* Several Python libraries including csv, operator, and plot.ly

## Built With

The application is built using React, which combines our HTML+CSS styling with the Python backend portion.  This enables us to pull the data from our csv files, convert it into data structures that allow us to sort the data, graph the data using plot.ly, and then upload it to our site.

## Authors

* **Danny** - *Fullstack* - [danielferriss](https://github.com/danielferriss)
* **Jeff** - *Data Scientist* - [Jeffpostcn](https://github.com/Jeffpostcn)
* **Divya** - *Backend Dev* - [DivyaBhati](https://github.com/DivyaBhati)
* **Ilie** - *GIS Specialist* - [ilievartic](https://github.com/ilievartic)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

