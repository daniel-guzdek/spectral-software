import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstName = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  message = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);

  getFirstNameInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'First Name is required';
    }

    return this.email.hasError('firstName')
      ? 'First Name input can not be empty'
      : '';
  }

  getLastNameInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Last Name is required';
    }

    return this.email.hasError('lastName')
      ? 'Last Name input can not be empty'
      : '';
  }

  getEmailInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getSubjectInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Subject is required';
    }

    return this.email.hasError('subject')
      ? 'Subject input can not be empty'
      : '';
  }

  getMessageInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Message is required';
    }

    return this.email.hasError('message')
      ? 'Message input can not be empty'
      : '';
  }

  constructor(private formBuilder: FormBuilder) {}

  // data from Contact Form
  contactFormData = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    subject: [''],
    message: [''],
  });

  saveForm = () => {
    console.log(this.contactFormData.value);
  };

  ngOnInit(): void {}
}
