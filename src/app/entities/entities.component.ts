import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntitiesService } from '../services/entities.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
  
})
export class EntitiesComponent implements OnInit {

  addEntities!:FormGroup
  updateEntities!:FormGroup
  
  disabledOptionExamples=true;
  exampleClicked="";
  i=0;
  disabledNext=false;
  disabledPrevious=true;
  NumIntents=0;;
  numPage=0;
  intents:Array<any>=[];
  intents2:any;
 
  
  IntentsNotFound=false;
  entities="Entities" ;
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
  constructor(private router:Router,private EntitiesService:EntitiesService,private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService) { 
    
     this.EntitiesService.GetAllEntities().subscribe((result)=>{
       console.log(result);
       
       
       result.forEach((data:any)=>{
        this.NumIntents=this.NumIntents+1;
        
       
        this.intents.push(data);

       })
       this.intents2=this.intents.slice(0,9);
      },(err)=>{
        
      })
      console.log(this.intents)
    
    console.log(this.NumIntents);
    this.numPage=Math.trunc( this.NumIntents/6 );
    console.log(this.numPage)
   
  }

  ngOnInit(): void {
    if(this.intents.length==0){
      this.IntentsNotFound=false;


      let formControl ={
        value : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
        synonym : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)])
      }

      let formControl1 ={
        value : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
        synonym : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)])
      }
      
      this.updateEntities= this.formBuilder.group(formControl1)  ;       
         this.addEntities= this.formBuilder.group(formControl)  ; 
    }
  }
  get g() { return this.updateEntities.controls;}
  get f() { return this.addEntities.controls;}
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
  console.log(this.NumIntents);
  console.log(this.numPage)
  this.disabledPrevious=false;
  this.i=this.i+1;
  if(this.i==this.numPage){
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
closeUpdateExample(){
  this.exampleClicked="";
}
AddIntent(){
  this.EntitiesService.AddEntities(this.f.value.value,this.f.synonym.value).subscribe((result)=>{
this.toastr.success("SUCESS","Entities Added Succefuly")
window.location.reload();
  },(err)=>{
    this.toastr.error("FAILED","ERROR")
    window.location.reload();


  })

}
changeIdIntent(id:any){
  localStorage.setItem("iMakrBotIntent",id);

}

deleteEntities(){

  
  this.EntitiesService.DeleteEntities(localStorage.getItem("iMakrBotIntent")).subscribe((result)=>{
    
    window.location.reload();

  },(err)=>{
    this.toastr.success("Success","Entities Deleted Succefuly");
    window.location.reload();


  })
}
UpdateEntities(){
  this.EntitiesService.UpdateEntities(localStorage.getItem("iMakrBotIntent"),this.g.value.value,this.g.synonym.value).subscribe((result)=>{
this.toastr.success("SUCESS","Entities Updated Succefuly");
window.location.reload();
  },(err)=>{
    this.toastr.success("FAILED","ERROR");
window.location.reload();

  })

}


}
