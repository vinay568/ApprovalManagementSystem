export class AccountsModel{
    id:number;
    email:string;
    password:string;
    isAdmin : boolean;

    constructor(id:number,email:string,password:string,isAdmin:boolean){
        this.id=id;
        this.email=email;
        this.password=password;
        this.isAdmin=isAdmin;
    }
}