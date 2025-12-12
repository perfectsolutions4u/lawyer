import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SiteData } from '../../models/site-data.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  ngOnInit() {
    this.dataService.getSiteData().subscribe(data => {
      this.siteData = data;
    });
  }
}

