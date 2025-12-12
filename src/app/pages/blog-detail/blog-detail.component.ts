import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SiteData } from '../../models/site-data.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);
  siteData: SiteData | null = null;
  post: any = null;

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.dataService.getSiteData().subscribe(data => {
      this.siteData = data;
      this.post = data.blog.items.find(p => p.id === postId);
    });
  }
}

