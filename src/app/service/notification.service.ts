import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toasterService:ToastrService) { }


  updateMsg(id:number){
    this.toasterService.success("Employee Updated with id :"+id,'Success',
    {progressBar:true,progressAnimation:'increasing',timeOut:2000});

    }
  deleteMsg(id:number)
  {
    this.toasterService.success('Employee deleted with id : '+id,'Success',
    {progressBar:true,progressAnimation:'increasing',timeOut:2000});
  }
  createMsg(id:number)
  {
    this.toasterService.success('Employee Created with id : '+id,'Success',
    {progressBar:true,progressAnimation:'increasing',timeOut:2000});
  }



}
