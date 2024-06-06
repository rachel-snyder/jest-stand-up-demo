
const greeting = (timeOfDay) => {
    if (timeOfDay === "night") {
        return "Goodnight is not a greeting";
    }
    return `Good ${timeOfDay}`;
}

const updateAge = (age) => {
    return age + 1;
}

const createArray = (numItems) => {
    let myList = [];
    for (let i = 0; i < numItems; i++) {
        myList.push("test elt " + i)
    }
    return myList;
}

const chooseStudent = () => {
    const Student = {
        firstName: "Josh",
        idNumber: 829,
        suspended: false
    }
    return Student;
}

// this line exports the functions from this file to be used elsewhere
module.exports = { greeting, updateAge, createArray, chooseStudent };