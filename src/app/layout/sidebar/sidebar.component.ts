import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { filter } from 'rxjs';
import { menus } from '../../utils/menu';
@Component({
  selector: 'app-sidebar',
  imports: [MenuModule, RouterModule, CommonModule, ButtonModule, AvatarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  items: MenuItem[] | undefined;
  @Input() isMenuShow!: boolean;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.detectarMudançasRotas();
  }

  ngOnInit() {
    this.items = menus
  }

  rotaAtiva(routerLink: string): boolean {

    if (!routerLink || routerLink.length === 0) {
      return false;
    }

    if (routerLink === '/') {
      return this.router.url === '/';
    }

    return this.router.url.startsWith(routerLink);
  }

  detectarMudançasRotas() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }
}
