1)I have created a angularjs application with name:EmployeeApp

2)I have created three buttons GetEmployees, GetSalary and GetEmployeeAndSalary
(Instead of using simple button, created clickable tabs which changes color on tab active).

3)A simple file for simulating REST call, I created JSON files.
a. employee.json
b. salary.json

4)Created function on button click events:
1. GetEmployees - button click event (controller), calls employee.json and display
   the Employee's FirstName, LastName and EmployeeID in HTML table (view).
2. GetSalary - button click event (controller), calls salary.json and display 
   the Employee's EmployeeID and Salary in HTML table (view).
3. GetEmployeeAndSalary - button click event (controller), calls employee.json and salary.json
   concurrently and then data is merged depending on EmployeeID into object3. 
   After that data is displayed in view with Employee's EmployeeID, FullName and Salary.

5)Since two REST get calls are async I used watch function, so that merging of data is done after both calls are completed.
6) I tried to create Nav Tab responsive with CSS.
