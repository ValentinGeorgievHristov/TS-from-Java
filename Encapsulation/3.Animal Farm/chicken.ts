export class Chicken {

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private _name!: string;

    get name(): string {
        return this._name;
    }

    private set name(value: string) {
        if (value === null || value === '' || value === ' ') {
            throw new Error('Name cannot be empty.');
        }
        this._name = value;
    }

    private _age!: number;

    get age(): number {
        return this._age;
    }

    private set age(value: number) {
        if (value < 0 || value > 15) {
            throw new Error('Age should be between 0 and 15.');
        };
        this._age = value;
    }

    productPerDay = ():number => {
      return this._calculateProductPerDay();
    }

    private _calculateProductPerDay = ():number => {
        let result = 0;
        if (this.age <= 5) {
            result = 2;
        } else if (this.age > 5 && this.age <= 11) {
            result = 1;
        } else if (this.age > 11) {
            result = 0.75;
        }
        return result;

    };
};


