import dayjs from 'dayjs';

export function exerciseDayOne(): void {
    runNumberOne();
    runNumberTwo();
    runNumberThree();
    runNumberFour();
    runNumberFive();
}

function runNumberOne(): void {
    let length: number = 5;
    let width: number = 3;
    console.log(`Input: length = ${length}, width = ${width}`);
    console.log(`Output: ${calculateRectangleArea(length, width)}`);
}

function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

function runNumberTwo(): void {
    let radius: number = 5;
    console.log(`Input: radius = ${radius}`);
    console.log(`Output: diameter = ${calculateDiameter(radius)}, 
    circumference = ${calculateCircleCircumference(radius).toFixed(4)}, 
    area = ${calculateCircleArea(radius).toFixed(4)}`);
}

function calculateDiameter(radius: number): number {
    return 2 * radius;
}

function calculateCircleCircumference(radius: number): number {
    return 2 * Math.PI * radius;
}

function calculateCircleArea(radius: number): number {
    return Math.PI * radius ** 2;
}

function runNumberThree(): void {
    let a: number = 80;
    let b: number = 65;
    console.log(`Input: a = ${a}, b = ${b}`);
    console.log(`Output: ${getThirdAngle(a, b)}`);
}

function getThirdAngle(a: number, b: number): number {
    return 180 - a - b;
}

function runNumberFour(): void {
    let date1: string = '2024-03-19';
    let date2: string = '2024-03-21';
    console.log(`Input: date1 = ${date1}, date2 = ${date2}`);
    console.log(`Output: ${findDifferenceInDay(date1, date2)}`);
}

function findDifferenceInDay(date1: string, date2: string): number {
    if (!dayjs(date1).isValid || !dayjs(date2).isValid) {
        throw Error("Date is not a valid date");
    }
    return dayjs(date2).diff(dayjs(date1), 'day');
}

function runNumberFive(): void {
    let userName: string = 'John Doe';
    console.log(`Input: ${userName}`);
    console.log(`Output: ${getInitial(userName)}`);
}

function getInitial(userName: string): string {
    let splittedUserName: string[] = userName.split(" ");
    splittedUserName.forEach((value, index) => {
        splittedUserName[index] = value[0];
    });
    return splittedUserName.join("");
}