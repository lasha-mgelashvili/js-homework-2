let  color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th","st","nd","rd"]

//მასივის შემოწმება 
let check = Array.isArray(color);
console.log(check);
console.log(typeof color);

//პირველი და ბოლო მონაცემის გამოტანა

console.log(color[0]);
console.log(color[color.length-1]);

//ფერებიას გამოტანა თანმიმდევრობით

console.log(" 1" + o[1] + " choice is " + color[0]);
console.log(" 2" + o[2] + " choice is " + color[1]);
console.log(" 3" + o[3] + " choice is " + color[2]);
console.log(" 4" + o[0] + " choice is " + color[3]);
console.log(" 5" + o[0] + " choice is " + color[4]);
console.log(" 6" + o[0] + " choice is " + color[5]);
console.log(" 7" + o[0] + " choice is " + color[5]);


//სტუდენტის მონაცემები,მონაცემის დამატებ და წაშლა.

let student = {
    firstName: "Lasha",
    lastName: "Mgelashvili",
    age: "19",
    liveingPlace: "Jinvali",
    weight: "70"
};

console.log(student);

// მონაცმეის დამატება

student.isWorking = "false";
console.log(student.isWorking)

//მონაცემის წაშლა 
delete student.weight;
delete student.isWorking

console.log(student)


//მონაცემის ჩნაცვლება ვერ მივხვდი !?