export class Info {
    description: string;
    money: number;
    constructor(description,money) {
        this.description = description;
        this.money=money;
    }
}
export class GoalContainer {
    public ok: string;
    public message: string;
    public body: Info[];
}
export class goals{

}