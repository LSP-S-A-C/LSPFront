export class Info {
    description: string;
    money: number;
    id:number;
    constructor(description:string,money:number,id:number) {
        this.description = description;
        this.money=money;
        this.id=id;
    }
}
export class GoalContainer {
    public ok: string;
    public message: string;
    public body: Info[];
}
