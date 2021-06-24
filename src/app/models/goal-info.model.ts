import { SavingPlans } from "./saving-plan";

export class Info {
    description: string;
    money: number;
    image:string;
    idSavingPlans:SavingPlans;
  
    constructor(description:string,money:number,image:string,id:number) {
        this.description = description;
        this.money=money;
        this.image=image;
        this.idSavingPlans.id= id;
       
    }
}
export class GoalContainer {
    public ok: string;
    public message: string;
    public body: Info[];
}
