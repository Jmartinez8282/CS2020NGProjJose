import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder,} from '@angular/forms';


@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss']
})
export class UserFormComponentComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get fName() { return this.userForm.get('fName'); }
  get lName() { return this.userForm.get('lName'); }
  get mName() { return this.userForm.get('mName'); }

  ngOnInit() {

  
    //this.UserFormComponentComponent = new FormGroup({
      //fName: new FormControl('', Validators.required),
      //lName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      //mName: new FormControl('',Validators.required),
      //hasMiddleName: new FormControl(false)
    //});
    this.userForm = this.formBuilder.group({
      fName:['', Validators.required],
      lName: ['',[Validators.required,Validators.minLength(3)]],
    mName: ['',Validators.required],
  hasMiddleName:false 
     
  
});

this.userForm.get('hasMiddleName').valueChanges.subscribe(val => {
  const control =  this.userForm.get('mName');
  if(val) {
    control.clearValidators();
  } else {
    control.setValidators(Validators.required);
  }
  control.updateValueAndValidity();
});

  }
  myUser = { fName: 'Casey', lName: 'Pampy',mName: 'secret', hasMiddleName:true};
  setValue() {
    this.userForm.setValue({
      fName: 'Cassandra',
      lName: 'Pamplona',
      mName: 'Casey',
      hasMiddleName: true
    });
  }

  patchValue(myUser){
    this.userForm.patchValue({
      fName: 'Casey'
    });
  }
setValue2(myUser){
  this.userForm.setValue(myUser)

}
submitForm() {
  if(this.userForm.invalid) {
    alert('Fix errors on form');
  } else {
    alert('Succesful!');
    this.userForm.reset();
    console.log(this.userForm.value);
  }
}
}
