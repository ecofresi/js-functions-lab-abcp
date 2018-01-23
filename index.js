// Ethel Cofresi - Functions Lab

/*
Write a function named happyHolidays. This function should not accept any parameters and should return the string "Happy holidays!".
*/

function happyHolidays() {
    return "Happy holidays!"
}
/*
/*
2. Write a function named happyHolidaysTo. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string `Happy holidays, ${name}!`
*/
 function happyHolidaysTo(name) {
        console.log(name)
        return `Happy holidays, ${name}!`
    }
  happyHolidaysTo('Jett')
  
/*
3. Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `Happy ${holiday}, ${name}!`
*/
    function happyHolidayTo(holiday, name) {
        console.log(holiday, name) // For testing on console
        return `Happy ${holiday}, ${name}!`
    }
     happyHolidaysTo('Flag Day', 'Jett')
  