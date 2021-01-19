export const initialState={
    user:null,
     basket:[]
    
 }
 export const actiontypes={
 ADD_TO_CART:"ADD_TO_CART",
 REMOVE_FROM_CART:"REMOVE_FROM_CART",
 SET_USER:"SET_USER"
 }
 export const reducer=(state,action)=>{
 switch(action.type){
     case actiontypes.ADD_TO_CART:
         return {
             ...state,
             basket:[...state.basket,action.item]
 
         }
     case actiontypes.REMOVE_FROM_CART:
         const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
         let newBasket=[...state.basket];
         if(index>=0){
             newBasket.splice(index,1);
         }
         else{
             console.warn(`can't remove iten (id ${action.id})`)
         }
         return {
             ...state,
             basket:newBasket
         }
     case actiontypes.SET_USER:
         return{
             ...state,
             user:action.user
         }
     default:
         return state;
 }
 }
 export default reducer ;