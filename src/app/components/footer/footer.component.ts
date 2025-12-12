import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { DataService } from "../../services/data.service";
import { SiteData } from "../../models/site-data.model";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, RouterLink],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }

  scrollToSection(url: string) {
    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  /**
   * Open email client with mailto: link
   */
  openEmail(email: string): void {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  }

  /**
   * Open phone dialer with tel: link
   */
  openPhone(phone: string): void {
    if (phone) {
      // Remove any non-digit characters except + for international numbers
      const cleanPhone = phone.replace(/[^\d+]/g, "");
      window.location.href = `tel:${cleanPhone}`;
    }
  }

  /**
   * Open Google Maps in new tab with the address
   */
  openGoogleMaps(address: string): void {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  }

  /**
   * Extract first email from content string
   */
  getFirstEmail(content: string): string {
    if (!content) return "";
    // Extract email from HTML content
    const emailMatch = content.match(/[\w\.-]+@[\w\.-]+\.\w+/);
    return emailMatch ? emailMatch[0] : "";
  }

  /**
   * Extract first phone number from content string
   */
  getFirstPhone(content: string): string {
    if (!content) return "";
    // Remove HTML tags and extract first phone number
    const textContent = content
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, "");
    // Match phone numbers (Egyptian format: starts with 0 or +20)
    const phoneMatch = textContent.match(/(?:0|\+20)?\d{10,11}/);
    return phoneMatch ? phoneMatch[0] : "";
  }
}
