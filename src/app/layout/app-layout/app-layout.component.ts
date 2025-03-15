import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-app-layout',
  imports: [HeaderComponent, SidebarComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayoutComponent {
  isExpanded = false;
  constructor(private cdr: ChangeDetectorRef) {}
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.cdr.detectChanges(); // Atualiza a visualização do componente
  }

  get showMenu() {
    return this.isExpanded;
  }
}
