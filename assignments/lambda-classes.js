// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
}

class Instructor extends Person {
    constructor(insAttribute){
        super(insAttribute);
        this.specialty = insAttribute.specialty,
        this.favLanguage = insAttribute.favLanguage,
        this.catchPhrase = insAttribute.catchPhrase
    }
    demo(){
        return `Today we are learning about ${this.specialty}`
    }
    grade(){
        return `${this.name} receives a perfect score on ${this.favLanguage}`
    }
}

class Student extends Person {
    constructor(studAttribute){
        super(studAttribute);
        this.previousBackground = studAttribute.previousBackground,
        this.className = studAttribute.className,
        this.favSubjects = studAttribute.favSubjects
    }
    listsSubjects() {

    }
    PRAssignment() {

    }
    sprintChallenge() {

    }

} 

class ProjectManager extends Instructor {
    constructor(pmAttribute){
        super(pmAttribute);
        this.gradClassName = pmAttribute.gradClassName,
        this.favInstructor = pmAttribute.favInstructor
    }
    standUp() {

    }
}




const Naruto = new Instructor({
    name: 'Naruto',
    location: 'Konoha',
    age: 20,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Believe it!`
  });

  const Indiana = new Instructor({
    name: 'Indiana',
    location: 'Princeton',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I hate snakes`
  });