import { Pipe, PipeTransform } from '@angular/core';
import {FakeUserQuestions} from '../models/fake-questions.model';

@Pipe({
  name: 'fakeQuestion'
})
export class FakeQuestionPipe implements PipeTransform {

  transform(value: string): string | number {
    return new FakeUserQuestions().chooseQuestion();
  }

}
