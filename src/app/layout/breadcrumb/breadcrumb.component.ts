import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { menus } from '../../utils/menu';
import { NavigationEnd, Router } from '@angular/router';
import { filter, last } from 'rxjs';
@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.buscarMenuAtual();
    });
  }
  buscarMenuAtual() {
    const currentUrl = this.router.url;
  
    const menuAtual = menus.find(item => {

      if (item.routerLink === '/') {
        return currentUrl === '/';
      }
      return currentUrl.startsWith(item.routerLink);
    });
  
    this.home = { icon: menuAtual?.icon};
  
    this.items = menuAtual ? [{ label: menuAtual.label }] : [];
  }
}
