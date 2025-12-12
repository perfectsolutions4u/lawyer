import { Component, OnInit, inject, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataService } from "../../services/data.service";
import { SiteData } from "../../models/site-data.model";
import { HeroSliderComponent } from "../../components/hero-slider/hero-slider.component";
import { ServiceIconComponent } from "../../components/service-icons/service-icons.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSliderComponent,
    ServiceIconComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initScrollAnimations();
      this.initNavbarScroll();
      this.initParallax();
    }, 500);
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section-title").forEach((title, index) => {
      setTimeout(() => observer.observe(title), index * 200);
    });

    setTimeout(() => {
      document.querySelectorAll(".service-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);

    setTimeout(() => {
      document.querySelectorAll(".project-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 150);
      });
    }, 500);

    setTimeout(() => {
      document.querySelectorAll(".timeline-item").forEach((item, index) => {
        setTimeout(() => observer.observe(item), index * 200);
      });
    }, 500);

    const ctaSection = document.querySelector(".cta-section");
    if (ctaSection) observer.observe(ctaSection);

    setTimeout(() => {
      document.querySelectorAll(".review-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 100);
      });
    }, 500);

    setTimeout(() => {
      document.querySelectorAll(".team-card").forEach((card, index) => {
        setTimeout(() => observer.observe(card), index * 150);
      });
    }, 500);
  }

  private initNavbarScroll() {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
    });
  }

  private initParallax() {
    const waveBg = document.querySelector(".wave-bg");
    if (!waveBg) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxSpeed = 0.3;
          if (scrolled < window.innerHeight) {
            (waveBg as HTMLElement).style.transform = `translateY(${
              scrolled * parallaxSpeed
            }px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
}
