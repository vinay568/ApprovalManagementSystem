export class BooksTable{
    id:number;
    name:string;
    author:string;
    description:string;
    count:number;
    available:boolean;

    constructor(id:number,name:string,author:string,description:string,count:number,available:boolean){
        id=this.id;
        name=this.name;
        author = this.author;
        description=this.description;
        count=this.count;
        available=this.available;
    }
}