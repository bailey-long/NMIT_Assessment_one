// setup of class called Date
class Date{
    // initialised constructor method with day, month and year as arguments.
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
        // array of months to be selected
        this.months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
}
//ANCHOR call this function to print the date in DD/MM/YY format
function printShortHand(dd, mm, yy, arg, dd2, mm2, yy2){
    // Construct the date using the Date class
    let date = new Date(dd, mm, yy);
    switch (arg){
    // ANCHOR displays date as written
    default:
    // if the day is greater than 31 or less than 1, displays invalid day when printed
    if (dd > 31 || dd < 1 || mm > 12 || mm < 1){
        return "You have input invalid credentials";
    } else {
        return ("The date is, " + date.day + "/" + date.month + "/" + date.year);
    }
    //ANCHOR case 2 - increments day by 1
    case 'increment':
    date.day ++;
    if (date.day >= 31){
        date.day = 1;
        if (date.month == 12){
            date.month = 1;
            date.year ++;
        } else {
            date.month ++;
        }
    }
    return ("The date is, " + date.day + "/" + date.month + "/" + date.year);
    //ANCHOR case 3 - decrements day by 1
    case 'decrement':
    date.day --;
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("The date is, " + date.day + "/" + date.month + "/" + date.year);
    // ANCHOR subtract 1 date from another
    case 'subtract':
        let daysBetween = (date.day += date.month += date.year) - (dd2 += mm2 += yy2);
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("day(s) between the dates, " + daysBetween);
    }
}    
//ANCHOR call this function to print the date in Month/DD/YY formatt
function printMonthDayYear(mm, dd, yy, arg, mm2, dd2, yy2){
    // Construct the date using the Date class
    let date = new Date(mm, dd, yy);
    switch (arg){
    default:
     // if the day is greater than 31 or less than 1, displays invalid day when printed
     if (dd > 31 || dd < 1 || mm > 12 || mm < 1){
        return "You have input invalid credentials";
    } else {
        // needed to use dd instead of date.day for this because of how the constructor is laid out
        return ("The date is, " + date.months[mm - 1] + "/" + dd + "/" + date.year);  
    }
    //ANCHOR case 2 - increments day by 1
    case 'increment':
    date.day ++;
    if (date.day >= 31){
        date.day = 1;
        if (date.month == 12){
            date.month = 1;
            date.year ++;
        } else {
            date.month ++;
        }
    }
    return ("The date is, " + date.months[mm - 1] + "/" + date.day + "/" + date.year);
    //ANCHOR case 3 - decrements day by 1
    case 'decrement':
    date.day --;
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("The date is, " + date.months[mm - 1] + "/" + date.day + "/" + date.year);
    // ANCHOR subtract 1 date from another
    case 'subtract':
        let daysBetween = (date.day += date.month += date.year) - (dd2 += mm2 += yy2);
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("day(s) between the dates, " + daysBetween);
    }
    
}
//ANCHOR call this function to print the date in the DD/Month/YY format
function printDayMonthYear(dd, mm, yy, arg, dd2, mm2, yy2){
    // Construct the date using the Date class
    let date = new Date(dd, mm, yy);
    switch(arg){
        default:
     // if the day is greater than 31 or less than 1, displays invalid day when printed
     if (dd > 31 || dd < 1 || mm > 12 || mm < 1){
        return "You have input invalid credentials";
    } else {
        return ("The date is, " + date.day + "/" + date.months[mm - 1] + "/" + date.year);
    }
    //ANCHOR case 2 - increments day by 1
    case 'increment':
    date.day ++;
    if (date.day >= 31){
        date.day = 1;
        if (date.month == 12){
            date.month = 1;
            date.year ++;
        } else {
            date.month ++;
        }
    }
    return ("The date is, " + date.day + "/" + date.months[mm - 1] + "/" + date.year);
    //ANCHOR case 3 - decrements day by 1
    case 'decrement':
    date.day --;
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("The date is, " + date.day + "/" + date.months[mm - 1] + "/" + date.year);
// ANCHOR subtract 1 date from another
    case 'subtract':
        let daysBetween = (date.day += date.month += date.year) - (dd2 += mm2 += yy2);
    if (date.day <= 1){
        date.day = 31;
        if (date.month == 1){
            date.month = 12;
            date.year --;
        } else {
            date.month --;
        }
    }
    return ("day(s) between the dates, " + daysBetween);
    }
}

/* Arguments
increment - increments the day by 1
decrement - decrements the day by 1
subtract followed by another date - subtracts 2 dates and returns the days between them.
*/

console.log(printShortHand(8,12,2222));
console.log(printMonthDayYear(1,15,2222));
console.log(printDayMonthYear(18,11,2222));
