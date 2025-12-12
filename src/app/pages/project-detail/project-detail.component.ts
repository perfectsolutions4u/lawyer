import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SiteData } from '../../models/site-data.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);
  siteData: SiteData | null = null;
  project: any = null;

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.dataService.getSiteData().subscribe(data => {
      this.siteData = data;
      this.project = data.projects.items.find(p => p.id === projectId);
    });
  }
}

