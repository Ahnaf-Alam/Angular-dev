
export class AddStudent {
    static readonly type = '[Student] Add Student';
    constructor(public name: string) {}
}
export class UpdateStudent {
static readonly type = '[Student] Update Student';
constructor(public name: string) {}
}
export class GetAllStudent {
    static readonly type = '[Student] Get Student';
    constructor(public name: string) {}
    }