import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {

  postForm! : FormGroup;
  tags:string[] = [];

  constructor(
    private fb:FormBuilder,
    private router:Router,
    
  ){}

  ngOnInit(){
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null,[Validators.required , Validators.maxLength(5000)]],
      img: [null, Validators.required]
    })
  }

  add(event:any){
    const value = (event.value || '').trim();
    if(value){
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tag:any){
    const index = this.tags.indexOf(tag);

    if(index>=0){
      this.tags.splice(index,1)
    }
  }
}
