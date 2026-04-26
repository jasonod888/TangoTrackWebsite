---
name: Vibrant Professionalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5d4038'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#926f66'
  outline-variant: '#e7bdb2'
  surface-tint: '#b12d00'
  primary: '#ad2c00'
  on-primary: '#ffffff'
  primary-container: '#d83900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb5a0'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#005daa'
  on-tertiary: '#ffffff'
  tertiary-container: '#0075d5'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004785'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is engineered for high-end professional environments where precision and energy must coexist. The brand personality is authoritative yet dynamic, combining a disciplined structural approach with a singular, high-octane focal point. 

The aesthetic follows a **Modern Minimalist** philosophy. It prioritizes expansive whitespace and ultra-clean layouts to ensure the user’s focus remains on the content. By utilizing a "low-noise" background environment, the vibrant primary accent acts as a functional beacon rather than just decoration. The result is a UI that feels airy, technologically advanced, and sophisticated, avoiding the clinical coldness of traditional enterprise software through intentional color hits and sleek typography.

## Colors

The palette is anchored by a high-contrast relationship between a pure white base and a vibrant "International Orange." 

- **Primary (#FF4500):** A high-visibility, energetic orange used sparingly for calls-to-action, active states, and critical brand moments.
- **Secondary (#1A1A1A):** A near-black utilized for primary text and high-contrast iconography to ensure absolute legibility.
- **Neutrals:** A range of very light grays (#F5F5F5 to #E5E5E5) are used to define surface boundaries and background zones without introducing heavy visual weight.
- **Success/Warning/Error:** Functional colors should follow a muted palette to ensure they do not compete with the primary orange accent.

## Typography

This design system exclusively uses **Inter** to maintain a systematic and utilitarian feel. The typographic hierarchy is built on tight leading for headlines to create a "locked-in" professional look, while body copy utilizes generous line height (1.6) to enhance readability in dense data environments. 

To maintain the high-end feel, we employ slight negative letter-spacing on larger display sizes. Small labels and captions should occasionally use medium weights and subtle tracking to provide a technical, architectural quality to the interface.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop (1280px max-width) and a fluid 12-column system for smaller viewports. 

A strict 4px baseline grid ensures precision in vertical rhythm. Large "airy" padding (using the `xl` unit) is encouraged between major content sections to prevent visual clutter. Internal component spacing should prioritize the `md` (16px) unit to maintain a balance between information density and clarity. Gutters are kept wide (24px) to emphasize the separation of data modules.

## Elevation & Depth

To maintain a "Modern Professional" feel, depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Primary Surfaces:** Use pure #FFFFFF.
- **Secondary Surfaces:** Use #F5F5F5 to denote "well" areas or sidebars.
- **Borders:** Use 1px solid strokes in #E5E5E5 for most containers.
- **Shadows:** When necessary for temporary overlays (modals/popovers), use ultra-diffused, ambient shadows: `0px 10px 30px rgba(0, 0, 0, 0.04)`. Avoid shadows on standard cards or buttons to preserve the sleek, flat aesthetic.

## Shapes

The shape language is defined by a **Subtle Roundness (ROUND_SIX)** approach. While 0.25rem (4px) is the standard for small elements, we utilize a 6px corner radius (approximated by the `Soft` setting) for primary containers and buttons. This creates a bridge between the clinical precision of sharp corners and the excessive playfulness of fully rounded shapes. It feels deliberate, engineered, and high-end.

## Components

- **Buttons:** Primary buttons use the vibrant #FF4500 background with white text. They should have no shadow, relying on the high-saturation color for prominence. Secondary buttons use a 1px #E5E5E5 border with #1A1A1A text.
- **Input Fields:** Use a 1px #E5E5E5 border that transitions to #FF4500 on focus. Backgrounds should be #FFFFFF for clarity.
- **Cards:** Use a 1px border (#E5E5E5) without a shadow. The card header should be separated by a subtle horizontal rule or a slight tonal shift to #F5F5F5.
- **Chips:** Small, low-profile elements with #F5F5F5 backgrounds and #1A1A1A text. Active chips should switch to #FF4500 backgrounds.
- **Lists:** Clean rows separated by 1px borders (#F5F5F5), utilizing generous vertical padding (16px) for an airy feel.
- **Status Indicators:** Use small, solid circles. The "Active" or "Critical" state uses the primary #FF4500 to pull immediate attention.