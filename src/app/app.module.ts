import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
//import { LandingComponent } from './landing/landing.component';
//import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';

import { GenerateurComponent } from './generateur/generateur.component';








import { AccountComponent } from './account/account.component';
import { CheckEmailComponent } from './ResetPassword/check-email/check-email.component';
import { ResendEmailComponent } from './ResetPassword/resend-email/resend-email.component';
import { TryAgainComponent } from './ResetPassword/try-again/try-again.component';
import { CreateNewPasswordComponent } from './ResetPassword/create-new-password/create-new-password.component';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { EditDeleteChatbotComponent } from './edit-delete-chatbot/edit-delete-chatbot.component';
import { WatsonComponent } from './watson/watson.component';
import { MicroLuisComponent } from './micro-luis/micro-luis.component';
import { AiProviderComponent } from './ai-provider/ai-provider.component';
import { EntitiesComponent } from './entities/entities.component';
import { IntentsComponent } from './intents/intents.component';
import { ContaintAssistantComponent } from './containt-assistant/containt-assistant.component';
import { HeaderAfterAuthentificationComponent } from './header-after-authentification/header-after-authentification.component';
import { ApplicationComponent } from './application/application.component';
import { ChatstepComponent } from './chatstep/chatstep.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    //LandingComponent,
   // ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,

    GenerateurComponent,

    AccountComponent,
    CheckEmailComponent,
    ResendEmailComponent,
    TryAgainComponent,
    CreateNewPasswordComponent,
    EditDeleteChatbotComponent,
    WatsonComponent,
    MicroLuisComponent,
    AiProviderComponent,
    EntitiesComponent,
    IntentsComponent,
    ContaintAssistantComponent,
    HeaderAfterAuthentificationComponent,
    ApplicationComponent,
    ChatstepComponent,
   
    HomeAdminComponent,
   
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,

    ReactiveFormsModule,
    HttpClientModule,
    

    ToastNoAnimationModule.forRoot(),

    BrowserAnimationsModule,
 
   
   
    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
