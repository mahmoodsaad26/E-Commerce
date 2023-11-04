import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const signGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  if(localStorage.getItem('userToken')){
    
    return false
  }else{
    
    return true

  }
};
