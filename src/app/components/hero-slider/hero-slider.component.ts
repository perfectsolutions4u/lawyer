import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  sequence,
} from "@angular/animations";

/**
 * HeroSliderComponent - Full-width hero slider with animations
 *
 * Features:
 * - Auto-play slides every 6-8 seconds
 * - Manual navigation (arrows, bullets)
 * - Infinite loop
 * - Angular Animations for smooth transitions
 * - Responsive design
 *
 * To customize:
 * - Change slides array below to modify slide content
 * - Adjust AUTO_PLAY_INTERVAL to change slide duration (in milliseconds)
 * - Replace imageUrl with your actual image paths
 */

interface Slide {
  id: number;
  imageUrl: string;
  // badge: string;
  title: string;
  // description: string;
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: "app-hero-slider",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./hero-slider.component.html",
  styleUrls: ["./hero-slider.component.css"],
  animations: [
    // Main slide animation trigger
    trigger("slideAnimation", [
      transition("* => *", [
        // Image cross-fade animation
        query(
          ".slide-image",
          [
            style({ opacity: 0, transform: "scale(1.05)" }),
            animate(
              "800ms ease-in-out",
              style({ opacity: 1, transform: "scale(1)" })
            ),
          ],
          { optional: true }
        ),

        // Staggered text animations using sequence for proper delays
        sequence([
          // Badge animation (no delay)
          query(
            ".slide-badge",
            [
              style({ opacity: 0, transform: "translateY(15px) scale(1.2)" }),
              animate(
                "1000ms ease-out",
                style({ opacity: 1, transform: "translateY(0) scale(1)" })
              ),
            ],
            { optional: true }
          ),

          // Title animation (200ms delay) - using animate as delay
          animate("200ms", style({})),
          query(
            ".slide-title",
            [
              style({ opacity: 0, transform: "translateX(-20px) scale(1.2)" }),
              animate(
                "1000ms ease-out",
                style({ opacity: 1, transform: "translateX(0) scale(1)" })
              ),
            ],
            { optional: true }
          ),

          // Description animation (200ms additional delay = 400ms total)
          animate("200ms", style({})),
          query(
            ".slide-description",
            [
              style({ opacity: 0, transform: "scale(1.2)" }),
              animate(
                "600ms ease-out",
                style({ opacity: 1, transform: "scale(1)" })
              ),
            ],
            { optional: true }
          ),

          // CTA animation (200ms additional delay = 600ms total)
          animate("200ms", style({})),
          query(
            ".slide-cta",
            [
              style({ opacity: 0, transform: "scale(0.85)" }),
              animate(
                "500ms ease-out",
                style({ opacity: 1, transform: "scale(1)" })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  activeSlideIndex = 0;
  private autoPlayInterval: any;

  // Auto-play interval in milliseconds (6000 = 6 seconds, 8000 = 8 seconds)
  // To change slide duration, modify this value
  private readonly AUTO_PLAY_INTERVAL = 7000;

  // Slides data array - modify this to change slide content
  // To replace placeholder images, change imageUrl to your actual image paths
  slides: Slide[] = [
    {
      id: 1,
      imageUrl: "./assets/slider/slide1.webp",
      title: "حماية حقوقك هي أولويتنا",
      ctaLabel: "تواصل معنا الأن ",
      ctaLink: "#contact",
    },
    {
      id: 2,
      imageUrl: "./assets/slider/slide2.webp",
      // badge: '',
      title: "خبرة قانونية تمتد لعقود من النجاح",
      // description: '',
      ctaLabel: "تواصل معنا الأن ",
      ctaLink: "#contact",
    },
    {
      id: 3,
      imageUrl: "./assets/slider/slide3.webp",
      // badge: '',
      title: "نحقق العدالة والإنصاف لك",
      // description: '',
      ctaLabel: "تواصل معنا الأن ",
      ctaLink: "#contact",
    },
    {
      id: 4,
      imageUrl: "./assets/slider/slide4.webp",
      // badge: '',
      title: "استشارات قانونية متخصصة في جميع المجالات",
      // description: '',
      ctaLabel: "ابدأ الاستكشاف",
      ctaLink: "#services",
    },
    {
      id: 5,
      imageUrl: "./assets/slider/slide5.webp",
      // badge: '',
      title: "تمثيل قانوني قوي في المحاكم",
      // description: '',
      ctaLabel: "ابدأ الاستكشاف",
      ctaLink: "#services",
    },
    {
      id: 6,
      imageUrl: "./assets/slider/slide6.webp",
      // badge: '',
      title: "ثقتك فينا هي أساس نجاحنا",
      // description: '',
      ctaLabel: "ابدأ الاستكشاف",
      ctaLink: "#services",
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  /**
   * Start auto-play timer
   */
  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.AUTO_PLAY_INTERVAL);
  }

  /**
   * Stop auto-play timer
   */
  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  /**
   * Go to specific slide by index
   * @param index - Slide index (0-based)
   */
  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.activeSlideIndex = index;
      // Restart auto-play when manually changing slides
      this.restartAutoPlay();
    }
  }

  /**
   * Go to next slide (with infinite loop)
   */
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    this.restartAutoPlay();
  }

  /**
   * Go to previous slide (with infinite loop)
   */
  prevSlide() {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.restartAutoPlay();
  }

  /**
   * Restart auto-play timer
   */
  private restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  /**
   * Get current slide
   */
  get currentSlide(): Slide {
    return this.slides[this.activeSlideIndex];
  }

  /**
   * Get animation state for current slide
   * This ensures animations restart when slide changes
   */
  get animationState(): string {
    return `slide-${this.activeSlideIndex}`;
  }

  /**
   * Smooth scroll to section when clicking CTA
   * @param link - The anchor link (e.g., '#tours', '#contact')
   */
  scrollToSection(link: string) {
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
