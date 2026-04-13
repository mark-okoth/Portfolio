// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'core',
    name: 'Core BC Development',
    color: 'blue',
    skills: [
      { name: 'AL Language', level: 95, desc: 'Expert-level AL extension development, codeunits, pages, tables, reports' },
      { name: 'C/AL Development', level: 90, desc: 'Legacy NAV C/AL customization, object modification, and migration' },
      { name: 'BC Extension Development', level: 95, desc: 'Full lifecycle extension development — design to AppSource' },
      { name: 'Business Central APIs', level: 85, desc: 'BC API pages, bound actions, and OData web services' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tooling',
    color: 'purple',
    skills: [
      { name: 'Git & GitHub', level: 87, desc: 'Branching strategies, pull requests, code review workflows' },
      { name: 'AL-Go for GitHub', level: 82, desc: 'Automated CI/CD pipelines specifically for Business Central' },
      { name: 'CI/CD Pipelines', level: 80, desc: 'Automated build, test, and deployment to SaaS tenants' },
      { name: 'VS Code / AL Extension', level: 92, desc: 'Primary IDE — snippets, debugging, container development' },
    ],
  },
  {
    id: 'integration',
    name: 'Integration',
    color: 'cyan',
    skills: [
      { name: 'REST API Integration', level: 88, desc: 'HttpClient codeunits, JSON parsing, OAuth 2.0 flows' },
      { name: 'Power Automate', level: 82, desc: 'Flow connectors, BC triggers, automated business workflows' },
      { name: 'SOAP / OData Web Services', level: 84, desc: 'Legacy and modern web service consumption and publishing' },
      { name: 'Azure Service Bus', level: 72, desc: 'Async messaging and event-driven integrations' },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting & Analytics',
    color: 'green',
    skills: [
      { name: 'RDLC Report Layouts', level: 92, desc: 'Complex multi-dataset reports with custom formatting' },
      { name: 'Word Report Layouts', level: 88, desc: 'Document-based templates with custom controls' },
      { name: 'Report Extensions', level: 86, desc: 'Non-destructive report customizations via extensions' },
      { name: 'Power BI Embedded', level: 70, desc: 'Business intelligence dashboards integrated with BC' },
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: 'Allonline365',
    role: 'Business Central Technical Consultant',
    period: '2022 – Present',
    type: 'Full-time · Remote',
    current: true,
    summary: 'Leading technical BC implementations and upgrade projects for enterprise clients across Europe and North America.',
    achievements: [
      'Architected and delivered 10+ full Business Central implementations across manufacturing, retail, and professional services',
      'Led NAV 2018 → BC SaaS upgrade projects, reducing average migration time by 25%',
      'Built reusable AL extension libraries that cut development effort by 30% across engagements',
      'Designed and implemented REST API integrations connecting BC to Salesforce, Shopify, and logistics platforms',
      'Established CI/CD pipelines using AL-Go, bringing release cycles from weeks to days',
    ],
  },
  {
    id: 2,
    company: 'Navisiontech Inc',
    role: 'Dynamics 365 BC Developer',
    period: '2021 – 2022',
    type: 'Contract · Remote',
    current: false,
    summary: 'Specialized BC customization and integration work for North American manufacturing and distribution clients.',
    achievements: [
      'Delivered custom AL extensions for manufacturing and retail verticals',
      'Implemented EDI integrations connecting BC to third-party logistics and 3PL platforms',
      'Performed version upgrades from NAV 2015/2016 to BC SaaS for 4 clients',
      'Mentored junior developers on AL coding standards and extension best practices',
    ],
  },
  {
    id: 3,
    company: 'Brightpoint Infotech',
    role: 'ERP Technical Consultant',
    period: '2020 – 2021',
    type: 'Full-time · Nairobi, Kenya',
    current: false,
    summary: 'Technical consulting for ERP implementations across East African markets in finance, healthcare, and retail.',
    achievements: [
      'Managed 6 BC implementation projects from initial scoping through go-live',
      'Developed custom payroll and HR modules integrated natively with Business Central',
      'Built automated financial reporting solutions saving 15+ hours per month for finance teams',
      'Delivered end-user training programs and post-go-live hypercare support',
    ],
  },
  {
    id: 4,
    company: 'Appkings Solutions',
    role: 'Business Central Developer',
    period: '2019 – 2020',
    type: 'Full-time · Nairobi, Kenya',
    current: false,
    summary: 'Core BC development and C/AL customization for local and regional enterprise clients.',
    achievements: [
      'Developed custom inventory management and procurement modules in AL',
      'Created RDLC and Word report layouts for key financial and operational documents',
      'Executed C/AL to AL object migration for a legacy NAV 2009 customer',
      'Integrated M-Pesa payment gateway with Business Central for a retail chain client',
    ],
  },
  {
    id: 5,
    company: 'Dataposit Limited',
    role: 'NAV / BC Developer',
    period: '2018 – 2019',
    type: 'Full-time · Nairobi, Kenya',
    current: false,
    summary: 'NAV and early Business Central development for financial services and logistics clients.',
    achievements: [
      'Maintained and extended existing NAV 2013/2016 installations with minimal downtime',
      "Led company's first Business Central 14 upgrade for a banking sector client",
      'Developed financial compliance modules meeting Central Bank of Kenya reporting requirements',
      'Built automated data migration tooling that reduced go-live risk on two projects',
    ],
  },
  {
    id: 6,
    company: 'Coretec Africa',
    role: 'Junior ERP Developer',
    period: '2017 – 2018',
    type: 'Full-time · Nairobi, Kenya',
    current: false,
    summary: 'Entry-level NAV development and technical support across manufacturing, distribution, and services.',
    achievements: [
      'Assisted in full NAV implementations for manufacturing and distribution clients',
      'Developed C/AL customizations for local tax compliance (VAT, withholding tax)',
      'Provided first-line technical support, issue resolution, and system maintenance',
      'Created technical documentation and end-user training materials',
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Enterprise NAV → BC Cloud Migration',
    category: 'Upgrade',
    color: 'blue',
    tags: ['BC SaaS', 'AL Migration', 'Data Migration'],
    problem: 'A manufacturing client on NAV 2015 with 7 years of C/AL customizations faced compliance gaps and lacked cloud capabilities.',
    solution: 'Full technical assessment, C/AL to AL rewrite of all custom objects, automated data migration, and phased go-live on BC SaaS.',
    outcome: 'Migration completed 2 weeks ahead of schedule. 40% reduction in IT costs. 100% data integrity across 500K+ records.',
  },
  {
    id: 2,
    title: 'Real-time API Integration Platform',
    category: 'Integration',
    color: 'purple',
    tags: ['REST API', 'HttpClient', 'Power Automate'],
    problem: 'A logistics company needed real-time synchronization between BC and three external platforms: CRM, WMS, and e-commerce.',
    solution: 'Built integration layer using BC API pages, custom codeunit web services, and Power Automate flows for bi-directional sync.',
    outcome: 'Eliminated manual data entry (saving 20 hrs/week). Inventory accuracy improved to 99.8%. Order latency under 5 seconds.',
  },
  {
    id: 3,
    title: 'Custom Payroll & HR BC Extension',
    category: 'AL Extension',
    color: 'cyan',
    tags: ['AL', 'Extensions', 'KRA Compliance'],
    problem: 'A multi-location employer needed payroll integrated into Business Central with KRA, NSSF, and NHIF statutory compliance.',
    solution: 'Developed a full AL extension suite covering payroll calculation, statutory deductions, payslip generation, and GL postings.',
    outcome: 'Replaced third-party payroll software, saving $15K/year. Full regulatory compliance met before client audit deadline.',
  },
  {
    id: 4,
    title: 'Automated Financial Reporting Suite',
    category: 'Reporting',
    color: 'green',
    tags: ['RDLC', 'Word Layouts', 'Power BI'],
    problem: 'Finance team spending 15+ hours monthly manually compiling reports from disparate BC datasets and spreadsheets.',
    solution: 'Built a comprehensive RDLC and Word layout suite with automated aggregation, plus Power BI dashboards for real-time visibility.',
    outcome: 'Report generation reduced by 90%. C-suite gained real-time dashboards. Month-end close shortened by 1.5 days.',
  },
  {
    id: 5,
    title: 'Multi-company BC Environment',
    category: 'Implementation',
    color: 'orange',
    tags: ['BC', 'Multi-company', 'Intercompany'],
    problem: 'A holding group with 5 subsidiaries ran 5 separate ERPs, making consolidated reporting and intercompany reconciliation impossible.',
    solution: 'Designed a unified BC environment with intercompany posting, automated consolidation, and a shared chart of accounts.',
    outcome: 'Consolidated 5 ERP systems into one. Monthly close reduced from 5 days to 1.5 days. Group reporting became instant.',
  },
  {
    id: 6,
    title: 'CI/CD Pipeline for BC Development',
    category: 'DevOps',
    color: 'pink',
    tags: ['AL-Go', 'GitHub Actions', 'Docker'],
    problem: 'A BC ISV had no automated testing or deployment pipeline, causing frequent production regressions and slow releases.',
    solution: 'Implemented AL-Go with GitHub Actions, automated unit tests, and containerized deployment to SaaS tenants across environments.',
    outcome: 'Deployment time cut by 60%. Zero production incidents in 6 months. Developer velocity improved by 35%.',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: 'BC Customization & Extensions',
    color: 'blue',
    description: 'Bespoke AL extension development tailored to your unique business processes — from UI enhancements to complex vertical solutions.',
    features: ['AL Extension Development', 'UI/UX Customization', 'Business Logic Implementation', 'Performance Optimization'],
  },
  {
    id: 2,
    title: 'NAV → BC Upgrade Services',
    color: 'purple',
    description: 'End-to-end upgrade services from any legacy Dynamics NAV version to modern Business Central SaaS or on-premise.',
    features: ['Technical Gap Assessment', 'C/AL to AL Migration', 'Data Migration & Validation', 'Post-go-live Hypercare'],
  },
  {
    id: 3,
    title: 'API & System Integration',
    color: 'cyan',
    description: 'Seamless connectivity between Business Central and external platforms using modern APIs and automation flows.',
    features: ['REST API Development', 'Power Automate Flows', 'OData / SOAP Services', 'Real-time Data Sync'],
  },
  {
    id: 4,
    title: 'Custom Reporting Solutions',
    color: 'green',
    description: 'Professional RDLC and Word report design, plus embedded Power BI dashboards for real-time management insights.',
    features: ['RDLC Report Design', 'Word Report Layouts', 'Report Extensions', 'KPI Dashboards'],
  },
  {
    id: 5,
    title: 'Technical Support & Optimization',
    color: 'orange',
    description: 'Ongoing support, proactive troubleshooting, and performance tuning to keep your BC environment at peak efficiency.',
    features: ['Bug Resolution', 'Performance Analysis', 'System Health Audits', 'Team Knowledge Transfer'],
  },
];

// ─── TECH STACK ───────────────────────────────────────────────────────────────
export const techStack = [
  { name: 'Business Central', abbr: 'BC', category: 'Platform', color: '#0078d4' },
  { name: 'AL Language', abbr: 'AL', category: 'Language', color: '#3b82f6' },
  { name: 'C/AL', abbr: 'C/', category: 'Language', color: '#6366f1' },
  { name: 'VS Code', abbr: 'VS', category: 'IDE', color: '#007acc' },
  { name: 'GitHub', abbr: 'GH', category: 'DevOps', color: '#8b5cf6' },
  { name: 'AL-Go', abbr: 'AG', category: 'DevOps', color: '#7c3aed' },
  { name: 'Docker', abbr: 'DO', category: 'DevOps', color: '#2496ed' },
  { name: 'Power Automate', abbr: 'PA', category: 'Integration', color: '#0066ff' },
  { name: 'Power BI', abbr: 'BI', category: 'Analytics', color: '#f2c811' },
  { name: 'REST APIs', abbr: 'API', category: 'Integration', color: '#06b6d4' },
  { name: 'Azure', abbr: 'AZ', category: 'Cloud', color: '#0078d4' },
  { name: 'SQL Server', abbr: 'SQL', category: 'Database', color: '#cc2927' },
  { name: 'RDLC', abbr: 'RD', category: 'Reporting', color: '#10b981' },
  { name: 'OData', abbr: 'OD', category: 'Integration', color: '#ec4899' },
  { name: 'Git', abbr: 'GT', category: 'DevOps', color: '#f97316' },
  { name: 'BcContainer', abbr: 'BCH', category: 'DevOps', color: '#14b8a6' },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'A. Johnson',
    role: 'CTO · Enterprise Manufacturing Client',
    text: "Mark delivered a seamless NAV to Business Central upgrade that we thought would take 6 months in under 4. His technical depth and communication throughout the project were exceptional.",
  },
  {
    id: 2,
    name: 'S. Mwangi',
    role: 'Finance Director · East Africa Manufacturing',
    text: "The custom payroll extension Mark built saved us significant licensing costs and gave us compliance we couldn't get from off-the-shelf products. Highly recommended.",
  },
  {
    id: 3,
    name: 'R. Patel',
    role: 'IT Manager · Logistics Group',
    text: "Our API integration went from concept to production in 3 weeks. Mark's expertise in BC web services and his attention to edge cases gave us a rock-solid solution.",
  },
];
