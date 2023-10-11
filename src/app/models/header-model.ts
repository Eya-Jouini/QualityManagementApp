export class HeaderModel {
    constructor(public icon:string,
                public title:string,
                public notif_nbr? :number){}
}

export interface SideBarItem {
    icon?: string,
    title?: string,
    notif_nbr? :number,
    route?: string,
    children?: SideBarItem [],
    showChildren?:boolean
}