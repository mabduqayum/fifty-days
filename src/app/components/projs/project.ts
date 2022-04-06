export class Project {
  private readonly _name;

  constructor(name: string) {
    this._name = name;
  }


  get name() {
    return this._name;
  }

  get path() {
    return this._name.replace(/ /g, '-').toLowerCase();
  }
}
