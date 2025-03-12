import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagementService } from '@services/TaskService';
import { NgIcon, provideIcons } from "@ng-icons/core"
import { tablerChevronLeftPipe, tablerChevronRightPipe } from "@ng-icons/tabler-icons"


@Component({
  selector: 'app-tasks',
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({tablerChevronLeftPipe, tablerChevronRightPipe})],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {

  private _tasks = inject(TaskManagementService)

  name = signal("Seji");
  count = signal(0);

  constructor() {

  }



  ReRollName = () => {
    const random = Math.floor(Math.random() * 3);

    const names = ["Sej", "Ren", "Blair"]
    return names[random];
  }

  changeName(name: string = "Jivan") {
    const newName = this.ReRollName();
    this.name.update(() => newName);
  }

  AnimateIt = signal(false);
  // AnimationJump = clsx(this.AnimateIt() && "animate-jump animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards")
  // @ViewChild('countSpan') countSpan!: ElementRef
  onAddAnimate() {
    this.AnimateIt.update(() => true);
    setTimeout(() => {
      this.AnimateIt.update(() => false);
    }, 1200)
  }


@ViewChild('countSpan') countSpan!: ElementRef
  increment() {
    this.count.set(this.count() + 1);
    this.onAddAnimate();
  }

  decrement() {
    this.count.set(this.count() - 1);
    this.onAddAnimate();
  }
}
