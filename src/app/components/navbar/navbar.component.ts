import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/**
 * NavbarComponent - Modern sticky navigation bar
 *
 * Features:
 * - Sticky at top on scroll
 * - Transparent at top, becomes solid after scrolling past hero
 * - Responsive hamburger menu for mobile
 * - Smooth scroll to sections
 * - Active section highlighting
 */
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  mobileMenuOpen = false;

  // Navigation menu items in Arabic
  // To change menu items, modify this array
  navItems = [
    { label: "الرئيسية", link: "/" },
    { label: "من نحن", link: "about" },
    { label: "الخدمات", link: "services" },
    { label: "المشاريع", link: "projects" },
    { label: "المدونة", link: "blog" },
    { label: "اتصل بنا", link: "contact" },
  ];

  // Hero slider height calculation
  // Hero slider is 90vh on desktop, so we use 85% of viewport height as threshold
  // This determines when the navbar background becomes solid
  private getHeroHeight(): number {
    // 90vh = 90% of viewport height, use 85% as threshold for better UX
    return window.innerHeight * 0.85;
  }

  ngOnInit() {
    this.checkScrollPosition();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    // Navbar becomes solid after scrolling past hero slider
    this.isScrolled = window.scrollY > this.getHeroHeight();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  /**
   * Smooth scroll to section when clicking nav link
   * @param link - The anchor link (e.g., '#home', '#about')
   */
  scrollToSection(link: string) {
    this.closeMobileMenu();

    if (link.startsWith("#")) {
      const elementId = link.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
}
