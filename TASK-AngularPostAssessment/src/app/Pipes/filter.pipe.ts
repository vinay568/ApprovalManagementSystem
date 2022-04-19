import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterId:any) {
    if(value.length === 0 || filterId ==='')
    {
      return value;
    }
    const books = [];
    for(var i=0;i<value.length;i++)
    {
      let sk = value[i].id;
      if( ((value[i].name).toLowerCase()).includes(filterId) )
      {
        books.push(value[i]);
      }
    }
    console.log(books);
    return books;
  }


}
