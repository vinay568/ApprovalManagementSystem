export class RequestedBooks{
    id:number;
    name:string;
    author:string;
    description:string;
    count:number;
    available:boolean;


    constructor(id:number,name:string,author:string,description:string,count:number,available:boolean){
        this.id=id
        this.name=name;
         this.author=author;
        this.description=description;
        this.count=count;
        this.available=available;
    }
}