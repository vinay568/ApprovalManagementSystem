import { identifierName } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFilter'
})
export class IdFilterPipe implements PipeTransform {

  transform(value: any,filterId:any) {
    
    console.log(value);
    if(value.length === 0 || filterId ==='')
    {
      return value;
    }
    
    //var searchKey = filterId.toLocaleUpperCase();
    const emps = [];
    for(var i=0;i<value.length;i++)
    {
      let sk = value[i].id;
      if((sk.toString().includes(filterId)) ||((value[i].name).includes(filterId)) || ((value[i].location).includes(filterId))  )
      {
        emps.push(value[i]);
      }
    }
    console.log(emps);
    return emps;
  }

}
