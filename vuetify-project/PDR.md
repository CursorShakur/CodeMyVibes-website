Tech Stack Summary (As of March 26, 2025)
Based on our recent decisions, the planned tech stack is:

Frontend Framework: Vue.js (v3, set up via npm create vuetify) ✅
UI Component Library: Vuetify (v3, Material Design components) ✅
Language: TypeScript ✅
Build Tool: Vite (comes with create-vuetify) ✅
CSS Styling: Vuetify's built-in styling system (potentially customized with SASS variables) & standard CSS/SCSS. (Replacing Tailwind CSS) ✅
Routing: Vue Router (included via Vuetify Recommended preset) ✅
State Management: Pinia (included via Vuetify Recommended preset) ✅
Code Quality: ESLint & Prettier (included via Vuetify Recommended preset) ✅
Backend (for Feature 1): Serverless Function via Supabase Edge Functions (to securely call a 3rd party LLM API) - In Progress
Animation (Potential Future): GSAP (GreenSock Animation Platform) - To be added later if needed for complex animations.
Internationalization (Potential Future): Paraglide JS - Setup considered for English, Spanish, French, Chinese, Korean, but implementation depends on business priority.
Product Definition Requirements (PDR) - Leigh Versatile Website
1. Introduction / Overview

Project: Leigh Versatile / CodeMyVibes™ website.
Purpose: Serve as the primary online presence for Leigh Versatile, an AI consultancy specializing in AI-assisted development enablement ("vibe coding") for SMBs, particularly domain experts [cite: Leigh Versatile.docx]. The site aims to educate potential clients, establish brand credibility, generate leads, and showcase capabilities through informative content and interactive tools.
2. Goals

Generate qualified leads through consultation requests.
Clearly articulate Leigh Versatile's value proposition, services, and methodology (CodeMyVibe™ process: Visualize, Instruct, Build, Enhance) [cite: Leigh Versatile.docx].
Educate visitors (especially domain experts in target industries) about the potential of AI-assisted development ("vibe coding") [cite: Leigh Versatile.docx].
Build trust and credibility by showcasing expertise and a professional image.
Engage users with unique, interactive demonstrations of AI enablement concepts.
3. Target Audience

Primary: Domain Experts / Subject-Matter Experts within Small-to-Medium Businesses (SMBs) located in the DMV region (DC, Maryland, Virginia) [cite: Leigh Versatile.docx].
Secondary: Decision-makers (CTOs, VPs, Project Managers) within these SMBs.
Key Industries (DMV Focus): Biotechnology, Cybersecurity, Government Contracting, Professional Services (Consulting, Legal), Research Institutions, Education, Non-Profits/Associations [cite: Leigh Versatile.docx].
4. Features

4.1 Landing Page Core Content:
Display the finalized website copy across distinct sections: Hero, Problem, Solution (including tagline), Process (Visualize, Instruct, Build, Enhance), Services (Assessment, Training, Custom Solutions), Target Audience, Why Us, Call To Action, Footer.
Content should focus on empowering domain experts.
Utilize Vuetify components for layout and elements.
4.2 Feature 1 (Revised): Industry Input -> Tool Suggestion:
UI: Input fields for "Industry" and "Service/Product Provided". Submit button. Dynamic results display area (e.g., using Vuetify cards, tables, or custom layout).
Functionality:
On submit, frontend sends Industry/Service data to a dedicated Supabase Edge Function.
Supabase Edge Function securely stores/uses a 3rd party LLM API key.
Function sends user input and a predefined prompt to the LLM.
LLM analyzes input to: a) Suggest typical roles in that industry/service context, b) List common off-the-shelf software tools used by those roles, c) Propose potential "vibe coded" alternative tools/automations relevant to the input, d) Estimate rough time/cost comparison (using placeholder or simple logic initially).
Supabase Edge Function receives structured data (e.g., JSON) from LLM.
Function returns structured data to the frontend.
Frontend displays the comparison in a user-friendly format.
4.3 Feature 2: Interactive Chart Demo:
UI: A visually engaging section demonstrating data transformation.
Functionality: An interactive element or looping animation showing sample data (conceptually from a source like Excel/CSV) being processed by illustrative "code" (or prompts) and rendered as an HTML chart (e.g., bar chart, line chart).
Utilize a Vue-compatible charting library (e.g., Chart.js with a Vue wrapper, ApexCharts, or potentially Vuetify's integrated options if sufficient).
Focus on illustrating the speed/ease of creating visualizations via AI-assisted methods.
4.4 Feature 3: Horizontal Scrolling Case Study:
UI: A dedicated section or page. Initial state allows filtering/selection by Industry (e.g., Biotech, Cybersecurity, Gov Contracting). Display area for case study details.
Functionality:
Upon selecting an industry, load relevant case study content.
Implement a horizontal scrolling mechanism (potentially triggered by vertical scroll, mouse wheel, or dedicated controls) to navigate through different parts or steps of the case study.
Ensure smooth animation (potential use for GSAP).
Requires well-structured case study content.
4.5 Contact / Lead Generation:
Ensure the "Request Your Strategic AI Consultation" buttons are functional.
Initially, can be a mailto: link or link to a dedicated contact page/form (form implementation TBD).
4.6 Internationalization (i18n) - Future:
Paraglide JS setup is configured.
Initial content is in English (en).
Placeholders/structure ready for adding Spanish (es), French (fr), Chinese (zh), Korean (ko) translations later based on business priority.
5. Design

Utilize the Vuetify 3 component library based on Material Design principles.
Aim for a clean, modern, professional, and trustworthy aesthetic, drawing inspiration from relevant benchmarks (e.g., Causaly's tech focus, MSA's professionalism).
Customize theme (colors, typography) to match Leigh Versatile branding (Primary: #2B579A, Accent: #00A0B0, etc.).
Ensure the website is fully responsive across common screen sizes (desktop, tablet, mobile).
6. Tech Stack

(List the tech stack summary from Part 1 above)
7. Non-Functional Requirements

Performance: Fast load times (leveraging Vite, Vue 3, optimized Vuetify/components).
Accessibility: Adhere to WCAG AA guidelines where feasible.
Security: Protect Supabase Function endpoints and any API keys. Standard web security practices.
Maintainability: Clean, well-documented code (TypeScript, ESLint, Prettier). Component-based architecture.
8. Open Issues / Future Considerations

Finalizing specific LLM provider and prompt engineering for Feature 1.
Sourcing realistic (or representative) cost/time data for Feature 1 comparisons.
Developing detailed content for Case Studies (Feature 3).
Detailed design mockups/wireframes.
Specific animation design (GSAP integration planning).
Contact form implementation details.
Deployment strategy (hosting platform selection, configuring adapter).
Prioritization of implementing Features 1, 2, and 3.
Timeline for implementing i18n translations.

9. Progress and Todo Checklist

Completed:
✅ Project setup with Vue 3 + Vuetify
✅ Basic project structure and organization
✅ Navigation bar implementation
✅ Footer implementation
✅ Hero section implementation
✅ Basic routing setup
✅ Basic layout components

In Progress:
🔄 Problem section implementation
🔄 Solution section implementation
🔄 Process section (Visualize, Instruct, Build, Enhance)
🔄 Services section (Assessment, Training, Custom Solutions)

Todo:
⬜ Feature 1: Industry Input -> Tool Suggestion
  - Create UI components for input fields
  - Set up Supabase Edge Function
  - Implement LLM integration
  - Design and implement results display

⬜ Feature 2: Interactive Chart Demo
  - Select and integrate charting library
  - Create sample data transformation demo
  - Implement interactive elements

⬜ Feature 3: Horizontal Scrolling Case Study
  - Design case study structure
  - Implement industry filtering
  - Create horizontal scrolling mechanism
  - Add case study content

⬜ Contact/Lead Generation
  - Design contact form
  - Implement form validation
  - Set up form submission handling

⬜ General Website Sections
  - Target Audience section
  - Why Us section
  - Call To Action sections

⬜ Testing
  - Unit tests for components
  - Integration tests for features
  - E2E tests for critical user flows

⬜ Optimization
  - Performance optimization
  - SEO implementation
  - Accessibility improvements

⬜ Documentation
  - Component documentation
  - Setup instructions
  - Deployment guide