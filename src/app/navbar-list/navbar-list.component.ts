import { Component, Input } from '@angular/core';
import { SideBarItem } from '../models/header-model';
import { Router } from '@angular/router';
import { menuItemsData } from '../shared/data/menu-items-data';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss']
})
export class NavbarListComponent {
  @Input() showNavbarList!: boolean;
  HeaderArray: SideBarItem[] =menuItemsData;

  constructor(private router: Router) { }

  /*showDropDown(item: SideBarItem, parent?: SideBarItem) 
  {
    if (item.showChildren === undefined) 
    {
      item.showChildren = false;
    }
    if (item.children) 
    {
      item.showChildren = !item.showChildren;
      if (parent) {
        parent.showChildren = true;
      }
    }
  }
  */





navigateToRoute(item : SideBarItem ,parent? :SideBarItem , grandParent? :SideBarItem ){
  if(!parent){
    //level 1 element so we need HeaderArray
    if (item.children){
      this.HeaderArray.forEach(e=>
      {
        if(e===item){
          item.showChildren=!item.showChildren;
        }
        else e.showChildren=false;
        e.children?.forEach(g =>{
          g.showChildren=false;
        })

      }
        
    );
  }

    else{
      this.router.navigateByUrl(`/${item.route}`);
      this.reinitialiserSideBar();
    } 
  }

  else{
    //mevel 3 or level 2 elements
    if(parent.children){

      parent.children.forEach(e=>{
        if(e===item){
          item.showChildren=!item.showChildren;
        }
        else e.showChildren=false;
      });
      if (!item.children){
        if(!grandParent)//level2
        {
          this.router.navigateByUrl(`/${parent.route}/${item.route}`);
          this.reinitialiserSideBar();
        }
        else{//level3
          this.router.navigateByUrl(`/${grandParent.route}/${item.route}`);
          this.reinitialiserSideBar();
        }

      }
    }

  }
}


reinitialiserSideBar(){
  this.HeaderArray.forEach(e=>{
   e.showChildren=false;
   if (e.children){
     e.children.forEach(c=>{
       c.showChildren=false;
       if(c.children){
         c.children.forEach(g=>{
           g.showChildren=false;
         })
       }
     })
   }
  });
 }


}
