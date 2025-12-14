import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { DataService } from "./services/data.service";
import { SiteData } from "./models/site-data.model";
import { CommonModule } from "@angular/common";

// Add all Font Awesome icon libraries
library.add(fas, far, fab);

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Perfect Solution 4U";
  private dataService = inject(DataService);
  siteData: SiteData | null = null;
  whatsappUrl: string = "https://wa.me/201111163696"; // Default fallback

  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
      if (data?.site?.social?.whatsapp) {
        this.whatsappUrl = data.site.social.whatsapp;
      }
    });
  }
}
