import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  mainform!: FormGroup
  Validation = false
  cites: any = [];
  object: any = {};
  id: any
  constructor(
    private grp: FormBuilder,
    private service: LoginService,
    private rout: Router,
    private router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getcity();
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    
    this.edit();
    this.mainform = this.grp.group({
      id: [null],
      jobTitle: [null, Validators.required],
      department: [null, Validators.required],
      jobType: [null, Validators.required],
      jobDescription: [null, Validators.required],
      jobQualification: [null, Validators.required],
      jobHighlights: [null, Validators.required],
      jobLocationId: [null, Validators.required],
      jobResponsibilities: [null, Validators.required],
      status: 'INACTIVE'
    })
  }
  get f() {
    return this.mainform.controls
  }
  onclick() {
    this.Validation = true
    if (this.mainform.invalid) {
      return
    }
    if(this.id){
      this.service.updatedetails(this.mainform.value).subscribe(res=>{
        this.rout.navigate(['/header/footer'])
      })
    }else{
      this.service.detailsform(this.mainform.value).subscribe(res => {
        this.rout.navigate(['/header/footer'])
      })
    }
  }

  getcity() {
    this.service.getCity().subscribe(res => {
      this.cites = res
    })
  }
  edit() {
    this.service.editdetails(this.id).subscribe(res => {
      this.object = res

      this.mainform.patchValue({
        id: this.object.data.id,
        jobTitle: this.object.data.jobTitle,
        department: this.object.data.department,
        jobType: this.object.data.jobType,
        jobDescription: this.object.data.jobDescription,
        jobQualification: this.object.data.jobQualification,
        jobHighlights: this.object.data.jobHighlights,
        jobLocationId: this.object.data.jobLocationId,
        jobResponsibilities: this.object.data.jobResponsibilities,
        status: 'INACTIVE'
      })
    })
  }
}
