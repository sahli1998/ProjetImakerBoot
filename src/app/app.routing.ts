import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
//import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CheckEmailComponent } from './ResetPassword/check-email/check-email.component';
import { ResendEmailComponent } from './ResetPassword/resend-email/resend-email.component';
import { TryAgainComponent } from './ResetPassword/try-again/try-again.component';
import { CreateNewPasswordComponent } from './ResetPassword/create-new-password/create-new-password.component';
import { AiProviderComponent } from './ai-provider/ai-provider.component';
import { MicroLuisComponent } from './micro-luis/micro-luis.component';
import { WatsonComponent } from './watson/watson.component';
import { IntentsComponent } from './intents/intents.component';
import { EntitiesComponent } from './entities/entities.component';
import { ContaintAssistantComponent } from './containt-assistant/containt-assistant.component';
import { HeaderAfterAuthentificationComponent } from './header-after-authentification/header-after-authentification.component';
import { ApplicationComponent } from '../app/application/application.component';
import { ChatstepComponent } from './chatstep/chatstep.component';
import { CreateChatbotComponent } from './create-chatbot/create-chatbot.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { GenerateurComponent } from './generateur/generateur.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
  //  { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
  //  { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:"account" , component:AccountComponent },
    { path: 'check-email',component:CheckEmailComponent },
    { path: 'resend-email',component:ResendEmailComponent },
    { path: 'try-again',component:TryAgainComponent },
    { path: 'CreateNewPassword',component:CreateNewPasswordComponent},
    { path:"ai-provider",component:AiProviderComponent},
{ path:"watson",component:WatsonComponent},
{ path:"micro-luis",component:MicroLuisComponent },
{path:"intents" , component:IntentsComponent },
{path:"entities" , component:EntitiesComponent },
{path:"containt-assistant" , component:ContaintAssistantComponent },
{path:"header" , component:HeaderAfterAuthentificationComponent},
{path: "chatBoot", component: ApplicationComponent },
{path: 'chatsteps', component: ChatstepComponent},
  {path: 'creer', component: ChatstepComponent},
  {path:'cree-chatbot', component:CreateChatbotComponent},
  {path:'home-admin', component:HomeAdminComponent},
  {path:'generateur', component:GenerateurComponent},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
