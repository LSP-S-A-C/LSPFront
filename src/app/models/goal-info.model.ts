import { SavingPlans } from "./saving-plan";

export class Info {
    description: string;
    amountGoal: number;
    pathImage:string;
    savingplan:SavingPlans;
    id:number;
  
    constructor(description:string,amountGoal:number,pathImage:string,idSavingplan:number,id:number) {
        this.description = description;
        this.amountGoal=amountGoal;
        this.pathImage=pathImage;
        this.savingplan.id= idSavingplan;
        this.id=id;
        
    }
}
export class GoalContainer {
    public ok: string;
    public message: string;
    public body: Info[];
}
