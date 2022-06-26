procedural programming also known as inline programming is based from the idea of executing code in the order that it is written,
it relies on routines or procedures. Procedural programming put simply is writing the code in series so it executes from "top to bottom"

Object oriented programming is about grouping code and behaviour into objects. Classes are a key feature of OOP as classes are all about creating "objects"
with multiple pieces of data contained in it.

In the table below I will make a more detailed comparison between the two methods 
| Procedural  | OOP         |
| ----------- | ----------- |
| Divided into functions      | divided into objects       |
| Top down design   | bottom up design        |
| Overloading is not possible   | overloading is possible        |
| function is more important than data   | data is more important than function       |
| data moves freely   | objects communicate data with member functions       |
| Language examples (C, FORTRAN, Pascal, Basic)   | C++, Javascript, Python, C#       |


To develop this calender app I will be using the waterfall method. I chose the waterfall method because it fits the straight forwardness of the project.
The steps in the waterfall model are as follows,
- design a date class
- create 3 functions
- setup switches inside of each function for the assessment requirements (increment, decrement and subtract)
- console log


I will be develping a console based calendar app in javascript. I will be designing three key functions in the app,
- function 1 will display the date in DD/MM/YY
- function 2 will display the date in Month/DD/YY
- function 3 will display the date in DD/Month/YY
Each funcion will call a constructor class called "Date", the constructor will have the key variables aswell as
an array of strings for the months in the year.
- Day
- Month
- Year
- [months]
```
Class Date {

    constructor (day, month, year){
        this.day = day
        this.month = month
        this.year = year
        this.months = ["array of month names"]
    }
}
```
the months variable is not a parameter because when printing the date, the month variable will be used to find the index of the month in the array, this array will
be defined inside of the Date class as to keep it with the other date variables in the object, making referencing the array make more logical sence.

To print the date in the console simply call the function in code with the date as the parameter and this will
print the date in the console.
Each funciton will have a parameter for incrementing or decrementing, if no parameter is set it will simply display the date 
put into the parameters as default. Increment will push the day variable up by 1 and decrement pushes it down by one. The idea of doing is 
is so that when the day goes below 1 or above the days in a month, it will tick the month down/up and the year if it is Janurary or December.

I will increment the variables using a series of if statements that increment if condition are met.
```
if (day greater than 31){
    add 1 to the month variable
    if (month greater than 12){
        add 1 to the year variable
    }
}
```
The code for decrementing the variables is virtually the same except the operators are reveresed and the check for the month is 1 rather than 12.

Finally I will be adding a case to the function to subtract 2 dates and return the number of days between them, this is a fairly simple addition.
I will be adding a new set of arguments called "subtract", "dd2", "mm2" and "yy2" dd2 etc are just a placeholder for the second date and subtract is 
a case to switch to. To make the code do as explained, I simply add the day month and year of date 1 and 2 to eachother respectfuly.
- (dd += mm += yy) - (dd2 += mm2 += yy2)  

then I return the result in a new variable called daysBetween and let it print to the console.