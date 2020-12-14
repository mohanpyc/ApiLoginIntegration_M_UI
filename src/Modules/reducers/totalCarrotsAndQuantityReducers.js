import { TOTAL_CARROTS_QUANTITY } from "../constants/constants";


export const totalInfoReducers=(state={},action)=>{
    console.log(action.payload,"total")
    switch(action.type){
        case TOTAL_CARROTS_QUANTITY:
            let diamondCarrot=0;
            let squQuantity=0;
            if(action.payload.data_array){
                action.payload.data_array.forEach((item)=>{
                        squQuantity+=item.sku_quantity;
                        diamondCarrot+=item.diamond_weight;
                })
            }
            return {
                diamondCarrot,
                squQuantity
            }
        default:
            return state
    }
}