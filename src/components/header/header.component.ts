import { Component } from '@angular/core';
import { NavigationPath, NavigationRoutes } from './header.data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { clsx } from 'clsx'
import {twMerge} from 'tailwind-merge'

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  NavigationLists: NavigationPath[] = NavigationRoutes;
  linkActive = twMerge("bg-emerald-700 animate-pulse")
}
