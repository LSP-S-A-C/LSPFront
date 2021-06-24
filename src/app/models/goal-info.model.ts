import { SavingPlans } from "./saving-plan";

export class Info {
    description: string;
    amountGoal: number;
    pathImage:string;
    savingplan:SavingPlans;
  
    constructor(description:string,amountGoal:number,pathImage:string,id:number) {
        this.description = description;
        this.amountGoal=amountGoal;
        this.pathImage=pathImage;
        this.savingplan.id= id;
        
    }
}
export class GoalContainer {
    public ok: string;
    public message: string;
    public body: Info[];
}
