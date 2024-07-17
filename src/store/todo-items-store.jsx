import React from "react";
const todoStore = React.createContext({
   todoList: [],
   todoAdd: ()=>{},
   todoDelete: ()=>{}
})

export default todoStore;