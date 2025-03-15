import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(private service: ApiService) {}

  // getPosts() {
  //   this.service.getPosts().subscribe((data: any) => {
  //     console.log('sidebar', data);
  //   });
  // }

  ngOnInit() {
    // this.getPosts();
  }
}
