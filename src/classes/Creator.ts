export class Creator {
  static count: number = 0;

  id: number;
  type: string;
  name: string;

  constructor(name: string) {
    this.id = Creator.count += 1;
    this.type = "creator";
    this.name = name;
  }
}
