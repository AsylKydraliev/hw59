export class Question {
  constructor(
    public questionText: string,
    public correctAnswer:string,
    public prompt: string,
    public answerStatus: string,
    public status: boolean,
  ) {
  }
}
