import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'angular-speeddial',
  templateUrl: './speeddial.component.html',
  styleUrls: ['./speeddial.component.scss'],
})
export class SpeeddialComponent implements OnInit {
  tooltipItems!: MenuItem[];

  ngOnInit(): void {
    this.tooltipItems = [
      {
        tooltip: 'Add',
        icon: 'pi pi-pencil',
      },
      {
        tooltip: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        tooltip: 'Delete',
        icon: 'pi pi-trash',
      },
      {
        tooltip: 'Upload',
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        tooltip: 'Angular Website',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
    ];
  }
}
