import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'typetoRoute'
})

export class typePipe implements PipeTransform { 
    str:string;
	constructor() {}
	transform(typeid:number): string { 
        switch (typeid) {
            case 1:
                this.str = "studyAbroad/detail";
                break;
        
            default:
                break;
        }
		return this.str;
	}
}
