import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isHomePage: boolean = false; // Variable para saber si estamos en la página de inicio

  constructor(private router: Router) {} // Inyecta el servicio Router

  ngOnInit() {
    // Suscríbete a los eventos de navegación del router
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        // Verifica si la URL es la raíz ('/') para determinar si estamos en la página de inicio
        this.isHomePage = event.url === '/';
      });
  }
}
