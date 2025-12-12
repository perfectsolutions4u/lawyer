import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SiteData } from '../../models/site-data.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  ngOnInit() {
    this.dataService.getSiteData().subscribe(data => {
      this.siteData = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initScrollAnimations();
    }, 500);
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-title, .stat-card, .timeline-item, .team-member, .value-card, .about-text').forEach((el, index) => {
      setTimeout(() => observer.observe(el), index * 100);
    });
  }
}

