export class FakeUserQuestions {

  questionsArrayOne = [
    'Is summer really even?',
    'Really even is summer?',
    'heckin what?'
  ];
  questionsArrayTwo = [
    'The best is done in the dead of the stone',
    'All that is gold does not glitter',
    'Hello there'
  ];
  questionsArrayThree = [
    5,
    7,
    9,
    4
  ];

  constructor() {
  }

  chooseQuestion(): string | number {
    const randomArray = Math.floor(Math.random() * 3);
    let question: string | number;
    switch (randomArray) {
      case 0:
        question = this.questionsArrayOne[Math.floor(Math.random() * this.questionsArrayOne.length)];
        break;
      case 1:
        question = this.questionsArrayThree[Math.floor(Math.random() * this.questionsArrayThree.length)];
        break;
      case 2:
        question = this.questionsArrayTwo[Math.floor(Math.random() * this.questionsArrayTwo.length)];
    }

    return question;
  }
}
