// @ts-check

export class Creator {
  static _count = 0;

  constructor(name) {
    this.id = Creator._count += 1;
    this.type = "creator";
    this.name = name;
  }
}
