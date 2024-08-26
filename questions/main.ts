// type command = "start"|"stop"|"pause"
// // function excutecommand(command:command): void {
// //     switch (command) {
// //         case "start":
// //             console.log("starting...");
// //             break;
// //         case "stop":
// //             console.log("stoping...");
// //             break;
// //             case "pause":
// //                 console.log("pausing...");
                
// //         default:
// //             console.error("invalid command");  
// //             break;
            
// //     }
// // }
// // excutecommand("start")
// // excutecommand("stop")
// // excutecommand("pause")
// // console.log("All commands executed successfully.");

// //QUESTION NUMBER 02
// // type Command = "start" | "stop" | "pause";

// // function executeCommand(command: Command): void {
// //     switch (command) {
// //         case "start":
// //             console.log("Starting...");
// //             break;
// //         case "stop":
// //             console.log("Stopping...");
// //             break;
// //         case "pause":
// //             console.log("Pausing...");
// //             break;
// //         default:
// //             // This will not be reached due to type constraints
// //             console.error("Invalid command");  
// //             break;
// //     }
// // }

// // // Example usage
// // executeCommand("start"); // Prints: Starting...
// // executeCommand("stop");  // Prints: Stopping...
// // executeCommand("pause"); // Prints: Pausing...

// // // Uncommenting the following line will cause a TypeScript error:
// // // executeCommand("resume"); // Error: Argument of type '"resume"' is not assignable to parameter of type 'Command'.

// // // Using console.log() to print an additional message
// // console.log("All commands executed successfully.");

// //QUESTION NUMBER 01 

// // type mytuple =[string,number,boolean]
// // function formattuple(tuple:mytuple):string {
// //  const[str,num,bool] = tuple;
// //  return`string : ${str} ,number: ${num}, and boolean : ${bool}`
// // }


// // const exampletuple:mytuple =["hello",42,true]
// // const formattedstring =formattuple(exampletuple)
// // console.log(formattedstring);

// //QUESTION NUMBER 03


// // Define the Person interface
// //interface Person {
// //     name: string;
// //     age: number;
// // }

// // // Define the Employee interface
// // interface Employee {
// //     employeeId: number;
// //     department: string;
// // }

// // // Create an intersection type combining Person and Employee
// // type PersonEmployee = Person & Employee;

// // // Function that takes an argument of type PersonEmployee and returns a formatted string
// // function getDetails(personEmployee: PersonEmployee): string {
// //     return `Name: ${personEmployee.name}, Age: ${personEmployee.age}, Employee ID: ${personEmployee.employeeId}, Department: ${personEmployee.department}`;
// // }

// // // Example object that conforms to the PersonEmployee type
// // const examplePersonEmployee: PersonEmployee = {
// //     name: "Alice",
// //     age: 30,
// //     employeeId: 12345,
// //     department: "Engineering"
// // };

// // // Call the function and log the result
// // const details = getDetails(examplePersonEmployee);
// // console.log(details); // Prints: Name: Alice, Age: 30, Employee ID: 12345, Department: Engineering

// // QUESTION NUMBER 04

// // enum days {
// //     monday="monday",
// //     tuesday="tuesday",
// //     wednesday="wednesday",
// //     thursday="thursday",
// //     friday="friday",
// //     saturday="saturday",
// //     sunday="sunday"
// // }
// // function getdaytype(day:days):string {
// //     if( day===days.saturday|| day===days.sunday) {
// //         return "weekend";
// //     } else{
// //         return "weekday"
// //     }
// // }

// // console.log(getdaytype(days.monday));    // Prints: Weekday
// // console.log(getdaytype(days.saturday));  // Prints: Weekend
// // console.log(getdaytype(days.sund;ay));    // Prints: Weekend

// // QUESTION NO 05

// // type StringOrNumber = string | number;

// // // Function to handle both string and number types
// // function processValue(value: StringOrNumber): number {
// //     if (typeof value === "string") {
// //         // Return the length of the string
// //         return value.length;
// //     } else if (typeof value === "number") {
// //         // Return the doubled value of the number
// //         return value * 2;
// //     }
// //     throw new Error(`invalid type`)
// // }

    
// // const stringResult = processValue('Hello');  // returns 5
// // const numberResult = processValue(42);       // returns 84
// // console.log(stringResult);
// // console.log(numberResult);
