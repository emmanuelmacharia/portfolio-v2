import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faDiscord, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import contacts from '../../app/core/contacts.json'


@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  github=faGithub
  linkedIn=faLinkedin
  discord=faDiscord
  facebook=faFacebook
  twitter=faXTwitter


  contactOptions = contacts.contacts;
}
