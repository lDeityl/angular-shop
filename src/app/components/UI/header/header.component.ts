import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    // Component logic here
}