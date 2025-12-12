import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-service-icon",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-icon-wrapper" [innerHTML]="getSafeIconSvg()"></div>
  `,
  styles: [
    `
      .service-icon-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .service-icon-wrapper ::ng-deep svg {
        width: 100%;
        height: 100%;
        max-width: 80px;
        max-height: 80px;
      }
    `,
  ],
})
export class ServiceIconComponent {
  @Input() iconName: string = "";

  constructor(private sanitizer: DomSanitizer) {}

  getSafeIconSvg(): SafeHtml {
    const svg = this.getIconSvg();
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getIconSvg(): string {
    const icons: { [key: string]: string } = {
      // تأسيس الشركات - Handshake/Partnership icon
      "company-formation": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50 L35 45 L40 50 L45 45 L50 50 L55 45 L60 50 L75 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="50" r="8" fill="currentColor"/><circle cx="70" cy="50" r="8" fill="currentColor"/><path d="M30 58 L35 65 L40 58 M60 58 L65 65 L70 58" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

      // القضايا الرياضية - Stadium/Court building with columns
      "sports-cases": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="60" height="50" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/><line x1="30" y1="35" x2="30" y2="85" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="35" x2="50" y2="85" stroke="currentColor" stroke-width="2.5"/><line x1="70" y1="35" x2="70" y2="85" stroke="currentColor" stroke-width="2.5"/><path d="M25 35 L50 25 L75 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="60" r="5" fill="currentColor"/></svg>`,

      // القانون المدني والجنائي - Briefcase
      "civil-criminal": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="35" width="50" height="40" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M30 35 L30 30 C30 25 35 20 40 20 L60 20 C65 20 70 25 70 30 L70 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 50 L65 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 60 L60 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

      // صياغة العقود - Building with document
      "contract-drafting": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="25" width="35" height="45" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M35 35 L60 35 M35 42 L55 42 M35 49 L55 49 M35 56 L50 56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 20 L50 15 L60 20 L60 30 L40 30 Z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 20 L45 30 M50 20 L50 30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

      // التحكيم في المنازعات - Open book
      arbitration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 25 L30 75 C30 80 35 85 40 85 L50 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M70 25 L70 75 C70 80 65 85 60 85 L50 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 25 L50 20 L70 25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 40 L45 40 M35 50 L45 50 M35 60 L45 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M55 40 L65 40 M55 50 L65 50 M55 60 L65 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

      // الاستشارات القانونية - Open book (different style)
      "legal-consultation": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 20 L35 80 C35 85 40 90 45 90 L50 90" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M65 20 L65 80 C65 85 60 90 55 90 L50 90" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 20 L50 15 L65 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 35 L60 35 M40 45 L60 45 M40 55 L60 55 M40 65 L55 65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="50" cy="75" r="3" fill="currentColor"/></svg>`,

      // تسجيل العلامات التجارية - Pen writing on document
      trademark: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="50" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M35 40 L65 40 M35 50 L60 50 M35 60 L55 60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M55 25 L65 20 L70 30 L60 35 Z" fill="currentColor"/><path d="M58 28 L62 32" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,

      // قضايا مجلس الدولة - Gavel (مطرقة)
      "state-council": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="60" width="50" height="8" rx="2" fill="currentColor"/><path d="M50 25 L50 60" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="45" y="20" width="10" height="15" rx="2" fill="currentColor"/><path d="M20 70 L80 70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

      // القضايا العسكرية - Shield
      "military-cases": `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L65 25 L70 40 L70 60 L50 85 L30 60 L30 40 L35 25 Z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 30 L50 50 M45 40 L50 50 L55 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 55 L60 55" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M40 65 L60 65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    };
    return icons[this.iconName] || "";
  }
}
