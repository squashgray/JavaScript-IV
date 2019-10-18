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
    demo(subject){
        return `Today we are learning about ${subject}`   // subject + student inserted into the methods as parameters to be used as arguments when called // 
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studAttribute){
        super(studAttribute);
        this.previousBackground = studAttribute.previousBackground,
        this.className = studAttribute.className,
        this.favSubjects = studAttribute.favSubjects                 //only students need subjects, other don't inherit from students //
    }
    listsSubjects() {
       return this.favSubjects.forEach(item => console.log(item));  // this.favSubject points to this objects favSubjects//
    
            
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`

    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`

    }

} 

class ProjectManager extends Instructor {  //grandchild of instructor//
    constructor(pmAttribute){
        super(pmAttribute);   // super and extends always need for class inheritance //
        this.gradClassName = pmAttribute.gradClassName,
        this.favInstructor = pmAttribute.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times! `  // parameter of 'channel' is put into the method//

    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}` 

    }
    
}


const Greg = new Student({
    name: 'Greg',
    location: 'Pahrump',
    age: 20,
    previousBackground: 'trucker',
    className: 'WEB25',
    favSubjects: ['CSS', 'HTML', 'JS']
});

const Homer = new Student({
    name: 'Homer',
    location: 'Springfield',
    age: 39,
    previousBackground: 'technician',
    className: 'UX5',
    favSubjects: ['beer', 'tv', 'donuts']
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
    favInstructor: 'Indiana',
    
  })
  
  console.log(Naruto.grade('Homer', 'BOWLING'));
  console.log(Indiana.demo('poop'));

  console.log(Tim.debugsCode('Greg', 'JavaScript'));
  console.log(John.standUp('HELP'));

  console.log(Naruto.speak());

  console.log(Homer.sprintChallenge('failure'));
  console.log( Homer.PRAssignment('ldfsa'));
  Homer.listsSubjects();
  