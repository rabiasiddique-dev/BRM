# Implementation Plan: Corporate Portfolio Transformation

## Overview

This implementation plan transforms the Blessing Marketing & Real Estate website from a property discovery platform into a premium corporate real estate portfolio website. The transformation repositions the brand from a property listing marketplace to a professional real estate marketing and consultancy firm.

**Technology Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React

**Implementation Approach**: The work is organized into 8 phases, executed sequentially with dependencies managed through task waves. Each task builds on previous work, ending with full integration and testing.

## Tasks

### Phase 1: Content Removal (HIGH Priority)

- [ ] 1. Remove property discovery features from Hero component
  - [ ] 1.1 Remove Property_Search_Widget from Hero component
    - Remove Buy/Rent property tabs, location filters, property type selectors, budget filters
    - Remove "Search Now" button and associated search functionality
    - Clean up related state management and event handlers
    - File: `/components/home/Hero.tsx`
    - _Requirements: 1.1, 2.5_
  
  - [ ] 1.2 Remove Featured Properties section from homepage
    - Remove section displaying individual houses, apartments, offices with prices/beds/baths
    - Remove property card components showing transactional details
    - File: `/app/page.tsx`
    - _Requirements: 1.2, 3.5_
  
  - [ ] 1.3 Remove "Explore Properties by Type" section
    - Remove property type categories (Houses, Apartments, Plots, Offices, Retail, Farmhouses)
    - Remove property count displays and navigation to property listings
    - File: `/app/page.tsx`
    - _Requirements: 1.3_

- [ ] 2. Update navigation and footer to remove property links
  - [ ] 2.1 Remove property-centric navigation links
    - Remove "Properties for Sale", "Properties for Rent", "Houses & Villas", "Luxury Apartments" from navigation menu
    - Update navigation structure to corporate focus (Home, Company, Services, Projects, Portfolio, Insights, Contact)
    - File: `/components/layout/Navbar.tsx`
    - _Requirements: 1.4, 13.1, 13.2_
  
  - [ ] 2.2 Remove property sections from footer
    - Remove property search links, property type links from footer
    - Update footer with corporate sections: About Blessing, Our Services, Quick Links, Contact Information
    - Update footer links to: About, Projects, Services, Portfolio, Insights, Contact, Privacy Policy, Terms
    - Files: `/components/layout/Footer.tsx`
    - _Requirements: 14.1, 14.2, 14.3_

- [ ] 3. Archive property listing pages and setup redirects
  - [ ] 3.1 Archive property-related components
    - Move `/components/properties/PropertyCard.tsx`, `PropertyFilters.tsx`, `PropertySearchHero.tsx` to archive folder or remove
    - Archive property listing UI components no longer needed
    - _Requirements: 1.5_
  
  - [ ] 3.2 Set up 301 redirects for removed property pages
    - Add redirects in `next.config.js`: /properties → /projects, /properties/[slug] → /projects, /areas → /projects, /sell-your-property → /contact, /rent-your-property → /contact
    - Test redirect functionality
    - _Requirements: 1.5, Architecture section_

- [ ] 4. Checkpoint - Verify property features removed
  - Ensure all property marketplace features removed
  - Verify no broken links remain on homepage
  - Test navigation flows work correctly
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 2: Hero & Core Sections (HIGH Priority)

- [ ] 5. Transform Hero Section to corporate branding
  - [ ] 5.1 Update Hero headline, subheadline, and CTAs
    - Replace headline with "Building Brands. Marketing Projects. Creating Real Estate Opportunities."
    - Replace subheadline with "Blessing Marketing & Real Estate delivers strategic marketing, consultancy and project-focused real estate solutions."
    - Add corporate CTAs: "Explore Our Work" (→ /portfolio), "Talk to Us" (→ /contact), "WhatsApp Us"
    - Implement badge component with "BLESSING MARKETING & REAL ESTATE" text
    - Add animation classes for text reveals (hero-headline-reveal, hero-subheadline-reveal, badge-animate-in)
    - File: `/components/home/Hero.tsx`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  
  - [ ] 5.2 Add stats grid to Hero section
    - Display 4 statistics: "10+ Years of Experience", "50+ Selected Projects", "500+ Trusted Clients", "1000+ Successful Deals"
    - Implement Stat component with number and label props
    - Add count-up animation for stats (will animate in Phase 6)
    - File: `/components/home/Hero.tsx`
    - _Requirements: 2.1, Architecture section_

- [ ] 6. Enhance Featured Projects section for corporate positioning
  - [ ] 6.1 Update ProjectCard to display "Our Role" tag prominently
    - Add `showOurRole` prop to ProjectCard component
    - Display "OUR ROLE: {project.ourRole}" badge with ShieldCheck icon
    - Remove display of price, beds, baths from project cards (ensure showPrice, showBedsBaths are false)
    - Update project footer to show project type and "Explore Project" CTA
    - Add hover zoom animation on project image
    - Files: `/components/projects/ProjectCard.tsx`, `/components/home/FeaturedProjects.tsx`
    - _Requirements: 3.2, 3.3, 3.4, 18.1_
  
  - [ ] 6.2 Update FeaturedProjects section structure
    - Display section heading: "SELECTED PORTFOLIO" / "Featured Projects" / description
    - Display 3 project cards in grid (1 col mobile, 2 col tablet, 3 col desktop)
    - Add "Explore All Projects" link at bottom
    - File: `/components/home/FeaturedProjects.tsx`
    - _Requirements: 3.1, 3.5_

- [ ] 7. Create or enhance Core Capabilities section
  - [ ] 7.1 Implement CoreCapabilities component with 6 service cards
    - Create CoreCapabilities component or enhance existing
    - Display section heading: "WHAT WE DO" / "Our Core Capabilities" / "End-to-end real estate marketing and consultancy services"
    - Define 6 capabilities array: Project Marketing, Real Estate Consultancy, Investment Advisory, Commercial Real Estate, Digital Marketing, Sales & Business Development
    - Each capability card shows: number (01-06), icon, title, description, arrow
    - File: `/components/home/CoreCapabilities.tsx` (create or modify)
    - _Requirements: 4.1, 4.2, 4.3_
  
  - [ ] 7.2 Implement CapabilityCard with hover effects
    - Create CapabilityCard component with capability-card styling
    - Display capability number, icon, title, description
    - Add hover overlay and arrow animation on hover
    - Link each card to `/services/{slug}`
    - File: `/components/home/CoreCapabilities.tsx`
    - _Requirements: 4.3, 4.4, 4.5_

- [ ] 8. Checkpoint - Verify hero and core sections complete
  - Test hero section displays correctly with new content
  - Verify project cards show "Our Role" and hide prices
  - Verify Core Capabilities section renders 6 services
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 3: Why Partner & Process (MEDIUM Priority)

- [ ] 9. Update "Why Blessing" section for corporate partnerships
  - [ ] 9.1 Update WhyBlessing component content and structure
    - Rename section to "Why Partner With Blessing?"
    - Update section heading: "WHY PARTNER WITH US" / "Why Partner With Blessing?" / "The advantages of working with a trusted real estate marketing partner"
    - Define 6 partnership values: Market Expertise, Strategic Marketing, Professional Consultancy, Strong Market Relationships, Client-Centric Approach, Transparent Communication
    - Update each value proposition with corporate partnership context (not buyer/investor focus)
    - File: `/components/home/WhyBlessing.tsx`
    - _Requirements: 5.1, 5.2, 5.3_
  
  - [ ] 9.2 Implement PartnershipCard component
    - Create PartnershipCard component with icon, title, description
    - Add animation delay prop for staggered reveals (will animate in Phase 6)
    - Apply dark theme styling (bg-slate-900, text-white)
    - File: `/components/home/WhyBlessing.tsx`
    - _Requirements: 5.4_

- [ ] 10. Enhance Process Section with visual flow
  - [ ] 10.1 Update ProcessSection with 6-step methodology
    - Update section heading: "OUR PROCESS" / "How We Execute Projects" / "A systematic approach to real estate marketing excellence"
    - Define 6 process steps: Discover, Strategize, Position, Market, Execute, Measure
    - Each step includes: step number (01-06), title, description
    - File: `/components/home/ProcessSection.tsx`
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ] 10.2 Implement desktop horizontal flow with connectors
    - Create horizontal grid layout for desktop (6 columns)
    - Add horizontal connector line with gold gradient (absolute positioned)
    - Implement ProcessStep component for desktop view
    - File: `/components/home/ProcessSection.tsx`
    - _Requirements: 6.5_
  
  - [ ] 10.3 Implement mobile vertical flow
    - Create vertical layout for mobile (stacked steps)
    - Implement ProcessStepMobile component
    - Ensure proper responsive breakpoints (lg: for desktop, default for mobile)
    - File: `/components/home/ProcessSection.tsx`
    - _Requirements: 12.3_

- [ ] 11. Checkpoint - Verify partnership and process sections complete
  - Test "Why Partner With Blessing?" section displays 6 values
  - Verify Process Section shows 6 steps with proper layout (horizontal desktop, vertical mobile)
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 4: Leadership & Case Studies (MEDIUM Priority)

- [ ] 12. Enhance Leadership Section with premium layout
  - [ ] 12.1 Update LeadershipSection component with CEO profile
    - Create 2-column grid layout (portrait left, bio right on desktop; stacked on mobile)
    - Display large professional portrait with aspect-[3/4] ratio, rounded-3xl, shadow-2xl
    - Add gradient overlay on portrait (bg-gradient-to-t from-slate-950/60)
    - File: `/components/home/LeadershipSection.tsx`
    - _Requirements: 8.1, 8.5_
  
  - [ ] 12.2 Display CEO biography and credentials
    - Display "LEADERSHIP" badge with gold accent
    - Display CEO name: "Syed M. Hassan Shah"
    - Display title: "CEO & Senior Real Estate Consultant"
    - Display biography paragraphs from company data
    - Add experience stats grid: "10+ Years Experience", "500+ Clients Served"
    - Add "Meet the Team" CTA link to /team
    - File: `/components/home/LeadershipSection.tsx`
    - _Requirements: 8.2, 8.3, 18.3_
  
  - [ ] 12.3 Add social links to portrait (if available)
    - Display LinkedIn link icon at bottom of portrait
    - Style with social-icon-link class
    - Conditionally render if socialLinks exist
    - File: `/components/home/LeadershipSection.tsx`
    - _Requirements: 8.4_

- [ ] 13. Create Portfolio and Case Studies showcase section
  - [ ] 13.1 Create CaseStudyCard component
    - Create new component for case study display
    - Display case study header: category tag, client name
    - Display project name as title
    - Display Challenge and Strategy sections with gold-400 labels
    - File: `/components/home/CaseStudyCard.tsx` (create new)
    - _Requirements: 7.2, 7.3_
  
  - [ ] 13.2 Add results metrics grid to CaseStudyCard
    - Display results in grid layout (2-4 metrics)
    - Each result shows metric value (bold, large) and label (small)
    - Add "Read Case Study" CTA linking to /portfolio
    - File: `/components/home/CaseStudyCard.tsx`
    - _Requirements: 7.2, 7.5_
  
  - [ ] 13.3 Add Portfolio section to homepage
    - Add section to homepage with "Portfolio & Case Studies" heading
    - Display at least 2 CaseStudyCard components
    - Add section to homepage flow after Process section
    - File: `/app/page.tsx`
    - _Requirements: 7.1, 7.3_

- [ ] 14. Checkpoint - Verify leadership and case studies sections complete
  - Test Leadership section displays CEO profile with portrait and bio
  - Verify Case Studies section shows 2+ case studies with metrics
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 5: Mobile Optimization (HIGH Priority)

- [ ] 15. Implement mobile responsive navigation
  - [ ] 15.1 Update Navbar for mobile hamburger menu
    - Implement hamburger menu icon for viewports < 768px
    - Create full-screen navigation overlay for mobile
    - Ensure hamburger menu opens/closes correctly with state management
    - Test dropdown menus work on mobile (Company, Services)
    - File: `/components/layout/Navbar.tsx`
    - _Requirements: 12.1, 12.2, 13.4_
  
  - [ ] 15.2 Implement navbar scroll behavior
    - Add scroll event listener to detect scroll position
    - Apply transparent background when at top, solid/glass background when scrolled
    - Add backdrop-blur-md effect when scrolled
    - Ensure smooth transition between states
    - File: `/components/layout/Navbar.tsx`
    - _Requirements: 10.3, 13.3_

- [ ] 16. Optimize project cards for mobile viewing
  - [ ] 16.1 Create swipeable project carousel for mobile
    - Implement horizontal scroll container with snap-x snap-mandatory
    - Apply flex layout for mobile, grid layout for desktop
    - Add proper spacing: gap-4 mobile, gap-8 desktop
    - Handle negative margin for full-width mobile scroll (-mx-4 px-4)
    - File: `/components/home/FeaturedProjects.tsx` or create ProjectsCarousel component
    - _Requirements: 12.3_
  
  - [ ] 16.2 Ensure project cards are touch-friendly
    - Verify touch targets are at least 44x44 pixels
    - Test swipe gestures work smoothly
    - Ensure images load properly in carousel
    - _Requirements: 12.5_

- [ ] 17. Implement mobile sticky CTA buttons
  - [ ] 17.1 Update MobileStickyCTA component
    - Display fixed bottom CTA bar on mobile only (md:hidden)
    - Show two buttons: "Call Now" (tel: link) and "WhatsApp" (WhatsApp link)
    - Style with proper branding: gold for Call, green for WhatsApp
    - Add phone and message circle icons
    - File: `/components/layout/MobileStickyCTA.tsx`
    - _Requirements: 12.4, 19.4_
  
  - [ ] 17.2 Integrate MobileStickyCTA into layout
    - Add MobileStickyCTA to main layout or homepage
    - Pass whatsappUrl and phoneNumber props from company data
    - Ensure sticky positioning works correctly (z-40, bottom-0)
    - File: `/app/layout.tsx` or `/app/page.tsx`
    - _Requirements: 19.5_

- [ ] 18. Test and fix mobile responsive issues
  - [ ] 18.1 Test all sections on mobile viewports
    - Test viewport widths: 375px (iPhone SE), 390px (iPhone 12 Pro), 414px (iPhone Pro Max), 360px (Android)
    - Verify no horizontal scroll on any section
    - Test text legibility at all sizes
    - Verify images scale properly without overflow
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ] 18.2 Verify touch target sizes
    - Measure all interactive elements (buttons, links, cards)
    - Ensure all touch targets are at least 44x44 pixels
    - Fix any targets smaller than 44px
    - _Requirements: 12.5_
  
  - [ ] 18.3 Test mobile performance
    - Run Lighthouse audit on mobile (target score > 90)
    - Check animation performance on mobile (should maintain 60fps)
    - Reduce animation complexity if needed for performance
    - _Requirements: 20.4, 20.5_

- [ ] 19. Checkpoint - Verify mobile optimization complete
  - Test entire homepage on mobile device (real device or emulator)
  - Verify hamburger menu, sticky CTA, swipeable cards work
  - Verify no horizontal scroll and all text legible
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 6: Animation & Visual Polish (MEDIUM Priority)

- [ ] 20. Implement scroll-reveal animations
  - [ ] 20.1 Create useScrollReveal custom hook
    - Create custom hook using IntersectionObserver API
    - Accept threshold and rootMargin options
    - Return ref and isVisible state
    - File: `/lib/hooks/useScrollReveal.ts` (create new)
    - _Requirements: 16.2_
  
  - [ ] 20.2 Apply scroll-reveal to homepage sections
    - Wrap sections with scroll-reveal animation classes
    - Apply fade-in, slide-up effects on sections (CoreCapabilities, WhyBlessing, ProcessSection, etc.)
    - Add transition classes: opacity-0 → opacity-100, translate-y-10 → translate-y-0
    - Use useScrollReveal hook in components
    - _Requirements: 16.2_

- [ ] 21. Implement Hero section animations
  - [ ] 21.1 Add background image slow zoom animation
    - Apply animate-slow-zoom class to Hero background image
    - Create Tailwind animation config: slow-zoom with scale transform
    - Set animation duration to 20-30 seconds for subtle effect
    - File: `/components/home/Hero.tsx`, `tailwind.config.js`
    - _Requirements: 16.1, 10.4_
  
  - [ ] 21.2 Add text reveal animations to Hero
    - Apply hero-headline-reveal animation to headline
    - Apply hero-subheadline-reveal animation to subheadline
    - Apply badge-animate-in animation to badge
    - Stagger animation delays for sequential reveal
    - Files: `/components/home/Hero.tsx`, `tailwind.config.js`
    - _Requirements: 16.1_

- [ ] 22. Implement count-up animation for statistics
  - [ ] 22.1 Create useCountUp custom hook
    - Create custom hook with count-up animation logic
    - Accept end value, duration, startOnView options
    - Use requestAnimationFrame for smooth counting
    - Integrate with IntersectionObserver to start on view
    - File: `/lib/hooks/useCountUp.ts` (create new)
    - _Requirements: 16.4_
  
  - [ ] 22.2 Apply count-up to stats throughout site
    - Apply to Hero stats grid
    - Apply to Leadership section experience metrics
    - Apply to Case Studies results metrics
    - Use useCountUp hook in Stat components
    - _Requirements: 16.4_

- [ ] 23. Implement hover effects on cards and buttons
  - [ ] 23.1 Add hover effects to ProjectCard
    - Apply image zoom on hover (scale-105, transition-transform duration-500)
    - Add lift effect with shadow (group-hover effects)
    - Ensure smooth transitions
    - File: `/components/projects/ProjectCard.tsx`
    - _Requirements: 16.3_
  
  - [ ] 23.2 Add hover effects to CapabilityCard
    - Apply hover overlay effect
    - Add arrow translation animation on hover (translate-x-1)
    - Ensure smooth transitions with group hover classes
    - File: `/components/home/CoreCapabilities.tsx`
    - _Requirements: 16.3_
  
  - [ ] 23.3 Add hover effects to CTA buttons
    - Apply subtle hover interactions to all CTA buttons
    - Add magnetic cursor effect or scale effect (optional enhancement)
    - Ensure hover states are accessible and not reliant on hover alone
    - _Requirements: 16.5_

- [ ] 24. Implement reduced motion support
  - [ ] 24.1 Create useReducedMotion hook
    - Create hook to detect prefers-reduced-motion media query
    - Return boolean indicating reduced motion preference
    - Add event listener for preference changes
    - File: `/lib/hooks/useReducedMotion.ts` (create new)
    - _Requirements: 20.4_
  
  - [ ] 24.2 Conditionally apply animations based on user preference
    - Use useReducedMotion hook in animated components
    - Disable or simplify animations when reduced motion is preferred
    - Ensure content is still accessible without animations
    - _Requirements: 20.4_

- [ ] 25. Checkpoint - Verify animations and visual polish complete
  - Test Hero animations (background zoom, text reveals)
  - Test scroll-reveal animations on all sections
  - Test count-up animations on stats
  - Test hover effects on cards and buttons
  - Verify animations disabled with reduced motion preference
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 7: Verification & Compliance (HIGH Priority)

- [ ] 26. Review and verify testimonials
  - [ ] 26.1 Audit all testimonial content on site
    - Identify all Testimonial components displayed on site
    - Check if testimonials have verified flag set to true
    - Remove any placeholder or generated testimonials
    - File: `/data/testimonials.ts`, `/data/portfolio.ts`
    - _Requirements: 15.1, 15.3_
  
  - [ ] 26.2 Ensure testimonials have proper attribution
    - Verify each testimonial has author full name, designation
    - Add company name if available
    - Ensure written permissions exist for all testimonials (check with stakeholder)
    - _Requirements: 15.2_

- [ ] 27. Verify marketing claims and metrics
  - [ ] 27.1 Review all performance metrics and claims
    - Audit stats displayed: "10+ Years", "50+ Projects", "500+ Clients", "1000+ Deals"
    - Audit case study metrics: "85% Sales Velocity", "200+ Investors Reached", etc.
    - Verify all claims can be substantiated with documentation
    - _Requirements: 15.4_
  
  - [ ] 27.2 Review superlatives and promotional language
    - Audit language for claims like "premier", "exclusive", "high ROI", "verified"
    - Ensure accuracy of all superlatives
    - Tone down or substantiate any questionable claims
    - _Requirements: 15.5_

- [ ] 28. Verify CEO biography and company information
  - [ ] 28.1 Review CEO profile accuracy
    - Verify Syed M. Hassan Shah biography is accurate
    - Verify title: "CEO & Senior Real Estate Consultant"
    - Verify experience claims: "10+ Years", "500+ Clients"
    - Check portrait image has proper licensing/permissions
    - File: `/data/company.ts`
    - _Requirements: 18.3_
  
  - [ ] 28.2 Review company information accuracy
    - Verify office addresses are current and correct
    - Verify phone numbers and email are correct
    - Verify social media links are valid
    - File: `/data/company.ts`
    - _Requirements: 14.4_

- [ ] 29. Add necessary disclaimers and legal compliance
  - [ ] 29.1 Review investment disclaimers
    - Ensure investment-related content includes appropriate disclaimers
    - Add disclaimers if promoting investment advisory services
    - Check with legal counsel if needed
    - _Requirements: 15.4_
  
  - [ ] 29.2 Verify Privacy Policy and Terms are up to date
    - Review Privacy Policy page for accuracy
    - Review Terms & Conditions page for accuracy
    - Update if needed to reflect corporate positioning
    - Files: `/app/privacy/page.tsx`, `/app/terms/page.tsx`
    - _Requirements: 14.3_

- [ ] 30. Checkpoint - Verify compliance complete
  - Confirm all testimonials verified and properly attributed
  - Confirm all marketing claims substantiated
  - Confirm CEO and company information accurate
  - Confirm necessary disclaimers in place
  - Ensure all tests pass, ask the user if questions arise

---

### Phase 8: Testing & QA (HIGH Priority)

- [ ] 31. Perform cross-browser testing
  - [ ] 31.1 Test on Chrome (latest 2 versions)
    - Test all homepage sections render correctly
    - Test animations work smoothly
    - Test navigation and CTAs work
    - Test on Windows and macOS if possible
    - _Requirements: Test Coverage section_
  
  - [ ] 31.2 Test on Safari (latest 2 versions)
    - Test all homepage sections render correctly
    - Test animations work smoothly (Safari has different rendering engine)
    - Test on macOS and iOS devices
    - _Requirements: Test Coverage section_
  
  - [ ] 31.3 Test on Firefox (latest 2 versions)
    - Test all homepage sections render correctly
    - Test animations work smoothly
    - Test navigation and CTAs work
    - _Requirements: Test Coverage section_
  
  - [ ] 31.4 Test on Edge (latest version)
    - Test all homepage sections render correctly
    - Test animations work smoothly
    - Test navigation and CTAs work
    - _Requirements: Test Coverage section_

- [ ] 32. Perform device testing
  - [ ] 32.1 Test on mobile devices
    - Test on iPhone SE (375px), iPhone 12 Pro (390px), various Android devices
    - Test all touch interactions, swipe gestures
    - Test sticky CTA buttons
    - Test hamburger menu navigation
    - Test on real devices if possible (not just browser emulation)
    - _Requirements: Test Coverage section, 12.1-12.5_
  
  - [ ] 32.2 Test on tablet devices
    - Test on iPad (768px), iPad Pro (1024px)
    - Verify responsive breakpoints work correctly
    - Test navigation and layout
    - _Requirements: Test Coverage section_
  
  - [ ] 32.3 Test on desktop viewports
    - Test on 1280px, 1440px, 1920px viewports
    - Verify layouts scale properly
    - Test all hover interactions
    - _Requirements: Test Coverage section_

- [ ] 33. Perform accessibility audit
  - [ ] 33.1 Run automated accessibility checks
    - Run axe DevTools or Lighthouse accessibility audit
    - Fix any automated issues found (color contrast, missing alt text, etc.)
    - Target WCAG 2.1 Level AA compliance
    - _Requirements: Test Coverage section_
  
  - [ ] 33.2 Test keyboard navigation
    - Test all interactive elements are keyboard accessible (Tab, Enter, Escape)
    - Test dropdown menus work with keyboard
    - Test hamburger menu works with keyboard
    - Ensure focus indicators are visible
    - _Requirements: Test Coverage section_
  
  - [ ] 33.3 Test screen reader compatibility
    - Test with screen reader (NVDA, JAWS, or VoiceOver)
    - Verify all images have descriptive alt text
    - Verify semantic HTML structure (headings, landmarks)
    - Verify ARIA labels where needed
    - _Requirements: Test Coverage section_

- [ ] 34. Perform performance audit
  - [ ] 34.1 Run Lighthouse audit on mobile
    - Run Lighthouse in Chrome DevTools (mobile simulation)
    - Target performance score > 90
    - Target accessibility score > 90
    - Target best practices score > 90
    - Target SEO score > 90
    - _Requirements: 20.5, Performance Optimization section_
  
  - [ ] 34.2 Run Lighthouse audit on desktop
    - Run Lighthouse in Chrome DevTools (desktop)
    - Target performance score > 95
    - Fix any issues identified
    - _Requirements: Performance Optimization section_
  
  - [ ] 34.3 Verify Core Web Vitals
    - Check First Contentful Paint (FCP) < 1.5s
    - Check Largest Contentful Paint (LCP) < 2.5s
    - Check Total Blocking Time (TBT) < 200ms
    - Check Cumulative Layout Shift (CLS) < 0.1
    - Test on 3G/4G network throttling
    - _Requirements: 20.5, Performance targets section_

- [ ] 35. Perform functional testing
  - [ ] 35.1 Test all navigation links
    - Click every link in navigation menu, verify correct destination
    - Test dropdown menus (Company, Services)
    - Test footer links
    - Verify no broken links (run link checker if possible)
    - _Requirements: Functional Testing checklist_
  
  - [ ] 35.2 Test all CTAs
    - Click every CTA button, verify correct destination
    - Test "Explore Our Work" → /portfolio
    - Test "Talk to Us" → /contact
    - Test "Partner With Us", "Discuss Your Project", etc.
    - _Requirements: Functional Testing checklist, 19.3_
  
  - [ ] 35.3 Test WhatsApp and phone links
    - Test WhatsApp CTAs pre-fill correctly with business inquiry message
    - Test phone links trigger correctly on mobile (tel: protocol)
    - Test sticky mobile CTA buttons
    - _Requirements: Functional Testing checklist, 19.4_
  
  - [ ] 35.4 Test project detail pages
    - Navigate to /projects page
    - Click on each project card
    - Verify project detail pages load correctly with all sections
    - Verify no property search functionality on detail pages
    - _Requirements: 11.1, 11.2, 11.3_

- [ ] 36. Perform content validation
  - [ ] 36.1 Verify all property marketplace content removed
    - Verify no Property_Search_Widget on hero
    - Verify no Featured_Properties section
    - Verify no "Explore Properties by Type" section
    - Verify no property listing links in navigation or footer
    - _Requirements: Content Testing checklist, 1.1-1.5_
  
  - [ ] 36.2 Verify corporate positioning content present
    - Verify Hero headline is "Building Brands. Marketing Projects. Creating Real Estate Opportunities."
    - Verify CTAs use corporate language (not property transaction language)
    - Verify "Our Role" tags visible on project cards
    - Verify no prices/beds/baths displayed on project cards
    - _Requirements: Content Testing checklist, 2.1-2.5, 3.2-3.4_

- [ ] 37. Final integration testing and deployment preparation
  - [ ] 37.1 Run production build and test locally
    - Run `npm run build` to create production build
    - Run `npm start` to test production build locally
    - Verify all features work in production mode
    - Check for any console errors or warnings
    - _Requirements: Deployment Checklist_
  
  - [ ] 37.2 Prepare deployment configuration
    - Update sitemap.xml with new page structure
    - Verify robots.txt is correct
    - Ensure 301 redirects configured in next.config.js
    - Prepare environment variables if needed
    - _Requirements: Deployment Checklist_
  
  - [ ] 37.3 Final visual regression check
    - Take screenshots of all major pages
    - Compare with design mockups/expectations
    - Fix any visual inconsistencies
    - Verify responsive breakpoints
    - _Requirements: Visual Testing checklist_

- [ ] 38. Checkpoint - Final QA complete, ready for deployment
  - Confirm all cross-browser tests passed
  - Confirm all device tests passed
  - Confirm accessibility audit passed (WCAG 2.1 AA)
  - Confirm performance audit passed (Lighthouse > 90 mobile, > 95 desktop)
  - Confirm all functional tests passed
  - Confirm content validation passed
  - Confirm production build successful
  - Ensure all tests pass, ask the user if questions arise

---

## Notes

### Implementation Guidelines

- **Sequential Execution**: Tasks are organized in phases that should be executed in order. Each phase builds on the previous phase's work.
- **Corporate Focus**: All changes should reinforce the corporate B2B positioning, removing property marketplace features and adding portfolio showcase elements.
- **Mobile First**: Always test mobile experience during implementation. Mobile optimization is a high priority.
- **Performance**: Monitor performance impact as you add animations and features. Lighthouse score must remain > 90 on mobile.
- **Verification**: Phase 7 (Verification & Compliance) is critical - all testimonials, claims, and content must be verified before production deployment.

### Testing Strategy

- **Continuous Testing**: Test each component after modification before moving to next task
- **Cross-Browser**: Test on Chrome, Safari, Firefox, Edge throughout development
- **Real Devices**: Use real mobile devices for testing when possible (not just browser emulation)
- **Accessibility**: Run accessibility checks early and often, not just at the end
- **Performance**: Monitor Lighthouse scores and Core Web Vitals throughout development

### Key Dependencies

- Hero transformation (Phase 2) depends on property removal (Phase 1)
- Mobile optimization (Phase 5) should be tested after all sections implemented (Phases 2-4)
- Animation implementation (Phase 6) requires sections to be structured correctly (Phases 2-4)
- Final testing (Phase 8) requires all previous phases complete

### Estimated Time

- **Phase 1**: 2-3 hours (Content Removal)
- **Phase 2**: 3-4 hours (Hero & Core Sections)
- **Phase 3**: 2-3 hours (Why Partner & Process)
- **Phase 4**: 3-4 hours (Leadership & Case Studies)
- **Phase 5**: 4-5 hours (Mobile Optimization)
- **Phase 6**: 3-4 hours (Animation & Visual Polish)
- **Phase 7**: 2-3 hours (Verification & Compliance)
- **Phase 8**: 3-4 hours (Testing & QA)

**Total**: 25-32 hours

### Priority Ranking

**HIGH Priority (Must Complete First):**
- Phase 1: Content Removal
- Phase 2: Hero & Core Sections
- Phase 5: Mobile Optimization
- Phase 7: Verification & Compliance
- Phase 8: Testing & QA

**MEDIUM Priority (Complete After High):**
- Phase 3: Why Partner & Process
- Phase 4: Leadership & Case Studies
- Phase 6: Animation & Visual Polish

## Task Dependency Graph

```json
{
  "waves": [
    {
      "id": 0,
      "tasks": ["1.1", "1.2", "1.3"]
    },
    {
      "id": 1,
      "tasks": ["2.1", "2.2", "3.1"]
    },
    {
      "id": 2,
      "tasks": ["3.2", "5.1"]
    },
    {
      "id": 3,
      "tasks": ["5.2", "6.1"]
    },
    {
      "id": 4,
      "tasks": ["6.2", "7.1"]
    },
    {
      "id": 5,
      "tasks": ["7.2", "9.1"]
    },
    {
      "id": 6,
      "tasks": ["9.2", "10.1"]
    },
    {
      "id": 7,
      "tasks": ["10.2", "10.3"]
    },
    {
      "id": 8,
      "tasks": ["12.1", "13.1"]
    },
    {
      "id": 9,
      "tasks": ["12.2", "12.3", "13.2"]
    },
    {
      "id": 10,
      "tasks": ["13.3", "15.1"]
    },
    {
      "id": 11,
      "tasks": ["15.2", "16.1"]
    },
    {
      "id": 12,
      "tasks": ["16.2", "17.1"]
    },
    {
      "id": 13,
      "tasks": ["17.2", "18.1"]
    },
    {
      "id": 14,
      "tasks": ["18.2", "18.3"]
    },
    {
      "id": 15,
      "tasks": ["20.1", "21.1", "22.1"]
    },
    {
      "id": 16,
      "tasks": ["20.2", "21.2", "22.2"]
    },
    {
      "id": 17,
      "tasks": ["23.1", "23.2", "23.3", "24.1"]
    },
    {
      "id": 18,
      "tasks": ["24.2", "26.1"]
    },
    {
      "id": 19,
      "tasks": ["26.2", "27.1", "28.1"]
    },
    {
      "id": 20,
      "tasks": ["27.2", "28.2", "29.1"]
    },
    {
      "id": 21,
      "tasks": ["29.2"]
    },
    {
      "id": 22,
      "tasks": ["31.1", "31.2", "31.3", "31.4"]
    },
    {
      "id": 23,
      "tasks": ["32.1", "32.2", "32.3"]
    },
    {
      "id": 24,
      "tasks": ["33.1", "33.2", "33.3"]
    },
    {
      "id": 25,
      "tasks": ["34.1", "34.2", "34.3"]
    },
    {
      "id": 26,
      "tasks": ["35.1", "35.2", "35.3", "35.4"]
    },
    {
      "id": 27,
      "tasks": ["36.1", "36.2"]
    },
    {
      "id": 28,
      "tasks": ["37.1", "37.2", "37.3"]
    }
  ]
}
```
