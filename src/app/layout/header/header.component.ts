import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>(); 

  onToggleClick() {
    this.toggleSidebar.emit(); 
  }
}
