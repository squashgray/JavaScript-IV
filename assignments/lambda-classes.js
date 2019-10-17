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
        ;
        Student.forEach(function(studAttribute){
            return favSubs.push(`${studAttribute.favSubjects} `);
           
          });
          console.log(favSubs);

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


const Greg = new Student({
    name: 'Greg',
    location: 'Pahrump',
    age: 20,
    previousBackground: 'trucker',
    className: 'WEB25',
    favSubjects: 'none'
});

const Homer = new Student({
    name: 'Homer',
    location: 'Springfield',
    age: 39,
    previousBackground: 'techican',
    className: 'UX5',
    favSubjects: 'donuts'
});

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

  const Tim = new ProjectManager({
    name: 'Tim',
    location: 'New York',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'I like turtles',
    gradClassName: 'WEB25',
    favInstructor: 'Indiana'
  })

  const John = new ProjectManager({
    name: 'John',
    location: 'Austin',
    age: 45,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Where is it?',
    gradClassName: 'WEB25',
    favInstructor: 'Indiana'
  })
  

  