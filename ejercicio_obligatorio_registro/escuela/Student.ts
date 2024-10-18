export class Student {
    private name : string;
    private note : number;

    constructor(name : string, note: number) {
        this.name = name;
        this.note = note
    }

    getName(): string {
        return this.name;
    }

    aprove(): boolean {
        if (this.note >= 7) {
            return true
        }else {
            return false
        }
    }


    getNote(): number {
        return this.note;
    }

}