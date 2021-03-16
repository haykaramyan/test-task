import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileData: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  });
  ages = [];

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {

    for (let i = 18; i <= 80; i++) {
      // @ts-ignore
      this.ages.push({
        name: i,
        value: i,
      });
    }
  }

  save() {

    const data = JSON.parse(localStorage.getItem('personalData'));

    if (data) {
      localStorage.removeItem('personalData');
    }

    localStorage.setItem('personalData', JSON.stringify(this.profileData.value));
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Successfully saved'});
  }
}
