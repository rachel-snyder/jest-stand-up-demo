// this line imports the functions from example.js
const { greeting, updateAge, createArray, chooseStudent } = require("./example.js");

describe("example.js tests", () => {
    describe("greeting tests", () => {

        // .toBe()
        test("greeting in the morning", () => {
            expect(greeting("morning")).toBe("Good morning");
        });

        // .not.toBe()
        test("testing proper outcome occurs if 'night' is input", () => {
            expect(greeting("night")).not.toBe("Good night");
        });
    });

    describe("age tests", () => {

        // .toBe()
        test("ensures aging increases by 1 from 4 to 5", () => {
            expect(updateAge(4)).toBe(5);
        });

        // .toBeGreaterThan
        test("ensuring age increases", () => {
            expect(updateAge(4)).toBeGreaterThan(4);
        });
    });

    describe("array tests", () => {

        // .toHaveLength()
        test("ensures array is of length 6", () => {
            expect(createArray(6)).toHaveLength(6);
        });

        // .toContain
        test("ensures array of length 4 contains test elt 3", () => {
            expect(createArray(4)).toContain("test elt 3")
        });

        // .not.toContain
        test("ensures array of length 4 doesn't contains test elt 6", () => {
            expect(createArray(4)).not.toContain("test elt 6")
        });
    });

    describe("student object tests", () => {

        // .toHaveProperty()
        test("ensures student has firstName property", () => {
            expect(chooseStudent()).toHaveProperty("firstName");
        });

        // .toHaveProperty()
        test("ensures student has firstName property with value Josh", () => {
            expect(chooseStudent()).toHaveProperty("firstName", "Josh");
        });

        // .not.toHaveProperty()
        test("ensures student is not named Dave", () => {
            expect(chooseStudent()).not.toHaveProperty("firstName", "Dave");
        });

        // .toMatchObject()
        test("ensures student has all the right properties", () => {
            const NewStudent = {
                firstName: "Josh",
                idNumber: 829,
                suspended: false
            }
            expect(chooseStudent()).toMatchObject(NewStudent);
        });
    });
});


// LINK TO MORE DOCUMENTATION: https://devhints.io/jest