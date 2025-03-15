import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockUIModule } from 'primeng/blockui';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, BlockUIModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loading = false;

  loadData() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000); 
  }

  ngOnInit() {
    // this.loadData();
  }
}
