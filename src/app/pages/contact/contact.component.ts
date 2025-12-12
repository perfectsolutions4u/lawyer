import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { DataService } from "../../services/data.service";
import { SiteData } from "../../models/site-data.model";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  private dataService = inject(DataService);
  siteData: SiteData | null = null;

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
  });

  ngOnInit() {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form submitted:", this.contactForm.value);
      // Add form submission logic here

      // Reset form after submission
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  // Getter methods for easy access to form controls
  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get subject() {
    return this.contactForm.get("subject");
  }

  get message() {
    return this.contactForm.get("message");
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
}
