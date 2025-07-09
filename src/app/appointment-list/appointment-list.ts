import { Component } from '@angular/core';
import {Appointment} from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList implements OnInit{

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

  // This is one of the critical parts of Angular and load data
  ngOnInit(): void {

    // First here we are trying to load the appointments wehave saved
    let savedAppointment = localStorage.getItem("appointments")

    // Here we going to check if we have a value with the '?' if we do we parse the value
    // to the variable and we load the data 
    // ':' means that if we don't have the value so lets create an empty array 
    this.appointments = savedAppointment ? JSON.parse(savedAppointment) : []
  }

  //Creating a method here
  addApointment() {
    // trim() fucntion helps us to remove any white spaces
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      // This will push the newly created element to the array we created
      this.appointments.push(newAppointment)

      // Cleaning the values after we push it to the array
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }
  }

  deleteAppointment(index: number) {
    //This will remove one element from the array based on the index we input
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}
