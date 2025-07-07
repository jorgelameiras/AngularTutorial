import { Component } from '@angular/core';
import {Appointment} from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();
  appointments: Appointment[] = []

}
