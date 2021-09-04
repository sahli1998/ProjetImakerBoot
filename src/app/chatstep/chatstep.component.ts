import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {BotService} from '../bot.service';
import { HttpClient} from '@angular/common/http';
import {BotDto} from '../BotDto';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chatstep',
  templateUrl: './chatstep.component.html',
  styleUrls: ['./chatstep.component.css']
})
export class ChatstepComponent implements OnInit {

  botDto: BotDto[];
  public imagePath;
  imgURL: any;
  userFile;
  file: File = null;
  img: any;
  id: any;
  image: any;
  public message: string;

  imagePreview: string;
  constructor( private router: Router, public botService: BotService, private http: HttpClient, public fb: FormBuilder) { }

  ngOnInit() {
    this.infoForm();
  }

  infoForm() {
    this.botService.dataForm = this.fb.group({
      id: null,
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],


    });
  }
  addData() {
    const formData = new FormData();
    const botDto = this.botService.dataForm.value;
    const botJson = JSON.stringify(botDto);
    const botJsonFile = new Blob([botJson], {
      type: 'application/json'
    });
    formData.append('newBot', botJsonFile);
    console.log(this.botDto);
    formData.append('file', this.userFile);
    console.log(this.userFile);
    this.botService.createData(formData).subscribe(  (response: BotDto) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public onSelectFile(event) {
    if (event.target.files.length > 0 )
    {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }}

  onSubmit() {
    this.addData();
  }
}



