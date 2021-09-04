import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-containt-assistant',
  templateUrl: './containt-assistant.component.html',
  styleUrls: ['./containt-assistant.component.css']
})
export class ContaintAssistantComponent implements OnInit {

  entities="containt-assistant" ;
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
      title:"containt-assistant",
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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
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

}
