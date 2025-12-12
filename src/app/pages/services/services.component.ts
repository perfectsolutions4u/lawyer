import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SiteData } from '../../models/site-data.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  ngOnInit() {
    this.dataService.getSiteData().subscribe(data => {
      this.siteData = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.service-card').forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);
  }
}

