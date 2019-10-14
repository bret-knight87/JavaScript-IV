// CODE here for your Lambda Classes

// Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    };
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructors extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    };
};

class Student extends Instructors {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    };
    listsSubjects() {
       this.favSubjects.forEach((subject) => {
         return `${this.name}'s favorite subjects are: ${subject}.`;  
       }); 
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };

}

class TeamLead extends Student {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    };
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!.`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    };
};

// Student Objects

const inst1 = new Instructors({
    name: 'Pace',
    age: 30,
    location: 'AZ',
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: "Don't Give Up!"
});

const inst2 = new Instructors({
    name: 'Josh',
    age: 32,
    location: 'USA',
    favLanguage: 'Python',
    specialty: 'back-end',
    catchPhrase: 'Yea Buddy!'
});

const stud1 = new Student ({
    name: 'Bret',
    age: 31,
    location: 'Springfield, MO',
    previousBackground: 'none',
    className: 'WEBPT11',
    favSubjects: 'JavaScript'
});

const stud2 = new Student ({
    name: 'Amanda',
    age: 33,
    location: 'St. Louis, MO',
    previousBackground: 'HTML & CSS',
    className: 'WEB1',
    favSubjects: 'React'
});

const tl1 = new TeamLead ({
    name: 'Jeff',
    age: 30,
    location: 'Oregon',
    previousBackground: 'Unknown',
    className: 'WEB22',
    favSubjects: 'Java'
});

console.log(inst1.speak());
console.log(inst2.grade(stud1, stud1.favSubjects));
console.log(stud2.PRAssignment(stud2.favSubjects));
console.log(tl1.standUp(stud2.className));