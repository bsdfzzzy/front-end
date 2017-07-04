import { Injectable } from '@angular/core';

// import { typeId } from "../model/typeIdModel";

@Injectable()
export class getTypeIdService {
    typeid:number;
    public getTypeId(tpid:number) {
        this.typeid = tpid
        return this.typeid;
    }
    public setTypeId(){
        return this.typeid;
    }
}