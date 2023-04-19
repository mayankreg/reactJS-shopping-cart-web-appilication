import addNotification from "react-push-notification";

export const warning = function (){
    addNotification({
      title: 'Warning',
      message: 'ITEM REMOVED FROM CART',
      theme: 'red',
      closeButton:"X",
    })
  };
  
  export const success = function (){
    addNotification({
      title: 'Success',
      message: 'ITEM ADDED TO CART',
      theme: 'light',
      closeButton:"X",
      backgroundTop:"green",
      backgroundBottom:"yellowgreen"
    })
  };