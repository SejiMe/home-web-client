import { Component, OnInit, Renderer2 ,ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagementService } from '@services/TaskService';
import { NgIcon, provideIcons } from "@ng-icons/core"
import { tablerChevronLeftPipe, tablerChevronRightPipe } from "@ng-icons/tabler-icons"
import {FormBuilder, FormGroup} from "@angular/forms"



@Component({
  selector: 'app-tasks',
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({tablerChevronLeftPipe, tablerChevronRightPipe})],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {

  private _tasks = inject(TaskManagementService)

  isOpen = signal(false);
  count = signal(0);

  constructor() {

  }



  openModal() {
    this.isOpen.update(() => true);
  }

  closeModal() {
    this.isOpen.update(() => false);

  }

}
