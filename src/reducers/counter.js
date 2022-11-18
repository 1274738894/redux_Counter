import { ADD,SUB } from "@/constans";
export const counter=(state=0,action)=>{
    console.log('reducer被调用了');
    switch(action.type){
        case ADD:
            return state+1
        case SUB:
            return state-1
        default:
            return state
    }
}