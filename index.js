/* Your Code Here */
function createEmployeeRecord(array){
    let employee = {};
    employee.firstName = array[0];
    employee.familyName = array[1];
    employee.title = array[2];
    employee.payPerHour = array[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee
}

function createEmployeeRecords(array){
    let employees = []
    for( let i = 0; i < array.length; i++){
        employees.push(createEmployeeRecord(array[i]))
    }
    return employees
}

function createTimeInEvent(dtString){
    this.timeInEvents.push({
        type: "TimeIn",
        date: dtString.split(" ")[0],
        hour: parseInt(dtString.split(" ")[1],10)})

    return this
}

function createTimeOutEvent(dtString){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dtString.split(" ")[0],
        hour: parseInt(dtString.split(" ")[1],10)})

    return this
}

function hoursWorkedOnDate(d){
    let inEvent = this.timeInEvents.find((e) => {
        return e.date === d
    })

    let outEvent = this.timeOutEvents.find((e) => {
        return e.date === d
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour*hours
}

function calculatePayroll(arrayOfEmployees){
    return arrayOfEmployees.reduce(function(bank, employee){
        return bank + allWagesFor.call(employee)
    }, 0)
}

function findEmployeeByFirstName(employees, firstName){
    return employees.find((employee) => {
        return employee.firstName === firstName
    })
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}