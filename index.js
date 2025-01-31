/* Your Code Here */
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    
    }
    
    }
    
function createEmployeeRecords(array){
    
        return array.map((records) =>{
            return  createEmployeeRecord(records)
        })
    
    }
    
    
function createTimeInEvent(empRecord, dateStamp){
    
        const [date, hour] = dateStamp.split(' ')
    
        empRecord.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date,
        })
    
        return empRecord
    }
    
    
function  createTimeOutEvent(empRecord, dateStamp){
        let [date, hour] = dateStamp.split(' ')
    
        empRecord.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date,
        })
    
        return empRecord
    }

    
function hoursWorkedOnDate(emp, dates) {
        let timeIn = emp.timeInEvents.find(event =>
            event.date == dates)
        let timeOut = emp.timeOutEvents.find(event =>
            event.date == dates)
        let totalTime = (timeOut.hour - timeIn.hour) / 100
        return totalTime;
      }


function wagesEarnedOnDate(emp, dates) {
        let hours = hoursWorkedOnDate(emp, dates)
        return emp.payPerHour * hours;
      }




      
      function calculatePayroll(employeeRecord) {
        return employeeRecord.reduce((total, employee) => {
            return total + allWagesFor(employee)
        }, 0)
      }



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

