import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IntentsService } from '../services/intents.service';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit {
  UpdateIntent!: FormGroup;
  AddIntent!: FormGroup;
  AddExample!: FormGroup;
  UpdatExample!:FormGroup;

  disabledOptionExamples=true;
  exampleClicked="";
  i=0;
  disabledNext=false;
  disabledPrevious=true;
  NumIntents=0;
  numPage:any;
  intents:Array<any>=[];
  intents2:any;
  examples:any;



  

  
    
 
 
  IntentsNotFound=false;
  Intents="Intents" ;
  overview=true;
  configuration:any;
  menus=[
    {
      title:"AI Providers",
      categorie:"Intelegence",
      Description:"Choose and configure your artificial intelligence provider",
      url:"ai-provider",
      
  
    },
    {
      title:"Intents",
      categorie:"Intelegence",
      Description:"Define how your bot should interpret and respnd to the user",
      url:"intents"
      
  
    },
    {
      title:"Entities",
      categorie:"Intelegence",
      Description:"Define the entities present iun user phrases",
      url:"entities"
      
  
    },
    {
      title:"Contains Assistant",
      categorie:"Intelegence",
      Description:"Manage your content using combination",
      url:"containt-assistant"
      
  
    },
    {
      title:"enhancement",
      categorie:"Intelegence",
      Description:"Use the user conservation history to improve your AI model ",
      url:"enhancement",
      
  
    },
    {
      title:"AI model analysis",
      categorie:"Intelegence",
      Description:"Get an overview of your model from an full review ",
      url:"ai-model-analysis",
      
  
    },
    {
      title:"Publication",
      categorie:"Intelegence",
      Description:"Train , test and publish your AI model ",
      url:"publication",
      
  
    },
   
    
  ]
  constructor(private router:Router,private IntentService:IntentsService,private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService) { 
    
    this.IntentService.GetAllIntents().subscribe((result)=>{
      console.log(result);
      result.forEach(data=>{
     
        this.NumIntents=this.NumIntents+1;
        
       
        this.intents.push(data);}
        
        )
        console.log(this.NumIntents);
       
        

        
        
        this.numPage=Math.trunc( this.NumIntents/6 );

        console.log(this.numPage)

        this.intents2=this.intents.slice(0,9);
      
      
      

    },(err)=>{
      console.log(err)
    })

    console.log('hellooo1')



  }

  ngOnInit(): void {
    let formControl3 ={
      UpdateNameIntents : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)])
    }
    
//********************************************************************************************************** */
    let formControl4 ={
      AddNameIntent : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)])
    }

    

    
  
//********************************************************************************************************** */
let formControl5 ={
  value : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)])
}

//*************************************************************************************************************** */
let formControl6 ={
  UpdateExampleValue : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)])
}

   this.UpdatExample= this.formBuilder.group(formControl6)  ; 
   this.AddExample= this.formBuilder.group(formControl5)
    this.UpdateIntent = this.formBuilder.group(formControl3);
    this.AddIntent = this.formBuilder.group(formControl4); 

}
get k() { return this.UpdatExample.controls;}
  get h() { return this.AddExample.controls;}
  get f() { return this.UpdateIntent.controls;}
  get g() { return this.AddIntent.controls;}
  load(m:any){
    this.router.navigateByUrl(m.url);

  }
  over(){
    this.overview=true;
    this.configuration=false;

  }
  config(){
    this.configuration=true;
    this.overview=false;

}
next(){
  this.disabledPrevious=false;
  this.i=this.i+1;
  console.log(this.numPage)
  if(this.i==this.numPage-1){
    this.disabledNext=true;
  }
  this.intents2=this.intents.slice(this.i*9,(this.i*9)+9)
  
}
previous(){
  this.disabledNext=false;

  this.i=this.i-1;
  console.log(this.i)
  if(this.i==0){

    this.disabledPrevious=true;
  }
  this.intents2=this.intents.slice(this.i*9,(this.i*9)+9)

}

UpdateExample(s:string){
 
  this.exampleClicked=s;
  



}
changeIdIntent(id:any){
  console.log('hello')
  localStorage.setItem("iMakrBotIntent",id);

}
closeUpdateExample(){
  this.exampleClicked="";
}
Example(id:any){
  console.log(id);
  this.IntentService.GetExample(localStorage.getItem("iMakrBotIntent")).subscribe((result)=>{
    this.examples=result;
    console.log(this.examples)
  },(err)=>{

  })

}

UpdateNewIntent(){
  console.log('HELLO')
  this.IntentService.UpdateIntent(localStorage.getItem("iMakrBotIntent"),this.f.UpdateNameIntents.value).subscribe((res)=>{
    this.toastr.success("SUCESS","Updated Succefuly")
    window.location.reload();
    
  }
  ,(err)=>{
    console.log('FALSE')
    console.log(err)
    


  })


}
deleteIntent(){
  this.IntentService.DeleteIntent(localStorage.getItem("iMakrBotIntent")).subscribe((result)=>{
    
    console.log('true delete ')
    window.location.reload();

  },(err)=>{
    
    this.toastr.success("Delete Succefully","Success")
    console.log('false delete ')
    console.log(err);
    window.location.reload();


  })

}
addIntent(){
  this.IntentService.AddIntent(this.g.AddNameIntent.value).subscribe((result)=>{
this.toastr.success("SUCECESS","Intent Added Succefuly")

window.location.reload();

  },(err)=>{
    
    this.toastr.error("FAILED","ERROR")
    window.location.reload();


  })
}

addExample(){
  this.IntentService.AddExample(localStorage.getItem("iMakrBotIntent"),this.h.value.value).subscribe((result)=>{
this.toastr.success("SUCESS","Example Added Succefuly")
window.location.reload();
  },(err)=>{
    this.toastr.error("FAILED","Error")

  })

}
updateExample(){
  this.IntentService.UpdateExample(localStorage.getItem("iMakrBotIntent"),this.k.UpdateExampleValue.value).subscribe((result)=>{
this.toastr.success("SUCESS","Example Updated Succefuly");
window.location.reload();

  },(err)=>{
    this.toastr.error("FAILED","ERROR");
    this.exampleClicked=""


  })
  
}
deleteExample(){
  this.IntentService.DeleteExample(localStorage.getItem("iMakrBotIntent")).subscribe((result)=>{
    

  },(err)=>{
    this.toastr.success("SUCESS"," Example Deleted Succefuly  ")
    window.location.reload();

  })
  
}

}

