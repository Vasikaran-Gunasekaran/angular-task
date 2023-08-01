import { Component ,OnInit} from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  value:any
  paginatinObject={
    "pagination":{
    "index":1,
    "rowCount":-1,
    "searchObj":null,
    "sortingObj":null
   }
    }
  constructor(
    private serve:LoginService,
    private rout:Router
  ){}
  ngOnInit(): void {
    this.allvalues()
  }
  allvalues(){
    this.serve.allvalues(this.paginatinObject).subscribe(res=>{
      this.value=res
    })
  }
  edit(id:any){    
      this.rout.navigate(['/header/detail',id])
  }
}
