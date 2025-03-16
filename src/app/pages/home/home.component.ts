import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = signal("Seji");
  count = signal(0);

  AnimateIt = signal(false);
  // AnimationJump = clsx(this.AnimateIt() && "animate-jump animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards")
  // @ViewChild('countSpan') countSpan!: ElementRef
  onAddAnimate() {
    this.AnimateIt.update(() => true);
    setTimeout(() => {
      this.AnimateIt.update(() => false);
    }, 1200)
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
