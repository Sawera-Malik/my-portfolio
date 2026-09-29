import Roomify from '../assets/Roomify.png';
import OMS from '../assets/OMS.png'
import Axya from '../assets/Axya.png';
import organization from '../assets/organization.png';

const projects = [
  {
    id: 'axya',
    title: 'AXYA',
    category: 'Frontend Development',
    shortDescription:
      'Frontend development and product improvements for a procurement platform, including UI enhancements, new features, analytics integrations, and product experience improvements.',

    description:
      'AXYA is a digital procurement platform focused on helping manufacturing and procurement teams streamline sourcing and supplier-related workflows. My work focused on improving the frontend product experience through UI enhancements, new functionality, product analytics integrations, and bug fixes.',

    image: Axya,
    mediaType: 'image',

    screenshots: [],

    technologies: [
      'React',
      'JavaScript',
      'Userpilot SDK',
      'Amplitude SDK',
      'REST APIs',
      'Frontend UI Development',
    ],

    features: [
      'New frontend features and functionality',
      'UI improvements and refinements',
      'Userpilot SDK implementation',
      'Amplitude SDK implementation',
      'Product analytics integration',
      'Third-party service integrations',
      'Bug fixes and UI issue resolution',
      'Improved user experience across product workflows',
    ],

    role:
      'Frontend Developer responsible for implementing UI improvements, developing new frontend functionality, integrating product analytics and engagement SDKs, handling integrations, and resolving frontend bugs.',

    implementation:
      'Worked across the existing frontend application to implement new product requirements and improve existing workflows. Integrated Userpilot for product engagement and in-app experiences, and implemented Amplitude for product analytics and event tracking. Also worked on third-party integrations, frontend UI improvements, new features, and bug fixes while maintaining consistency with the existing product design system.',

    challenges: [
      {
        challenge:
          'Integrating external product analytics and engagement tools into an existing frontend application while keeping the existing user experience consistent.',
        solution:
          'Integrated the required SDKs within the existing frontend architecture and connected the required product interactions/events while keeping the implementation aligned with existing application patterns.',
      },
      {
        challenge:
          'Implementing new product requirements without disrupting existing workflows.',
        solution:
          'Worked within the existing component structure and UI patterns, making targeted frontend changes and testing affected workflows after implementation.',
      },
      {
        challenge:
          'Resolving UI and functionality issues across existing product flows.',
        solution:
          'Identified affected components and workflows, fixed frontend issues, and refined the UI and behavior to provide a more consistent experience.',
      },
    ],

    liveUrl: 'https://axya.co/',
    githubUrl: '',
  },

  {
  id: 'oms',
  title: 'Enigmatix OMS',
  category: 'Frontend Development',

  shortDescription:
    'An Integrated Office Management System built to streamline office staff management, attendance, and administrative workflows.',

  description:
    'Enigmatix OMS is an Integrated Office Management System designed to combine office staff management with automated attendance and administrative workflows. I worked on the frontend side of the application using a microfrontend architecture, implementing UI improvements, fixing existing interface issues, and integrating REST APIs across different modules.',

  image: OMS,
  mediaType: 'image',

  screenshots: [],

  technologies: [
    'React',
    'JavaScript',
    'Microfrontend Architecture',
    'REST APIs',
    'API Integration',
    'Frontend Development',
  ],

  features: [
    'Office staff management',
    'Automated attendance workflows',
    'Modular microfrontend architecture',
    'REST API integration',
    'Module-level UI improvements',
    'Frontend functionality improvements',
    'UI bug fixes',
    'Backend API integration',
  ],

  role:
    'Frontend Developer responsible for working on different microfrontend modules, implementing UI fixes and improvements, integrating REST APIs, and improving existing frontend functionality.',

  implementation:
    'Worked within the OMS microfrontend architecture and contributed to individual application modules. Implemented UI fixes and improvements, connected frontend modules with REST APIs, handled API-driven functionality, and worked on frontend refinements required by different modules while maintaining consistency with the existing application.',

  challenges: [
    {
      challenge:
        'Working across multiple modules within a microfrontend architecture while maintaining a consistent user experience.',

      solution:
        'Worked within the existing module structure and implemented changes in the relevant microfrontend while following the established UI patterns and application architecture.'
    },

    {
      challenge:
        'Integrating REST APIs into frontend modules and connecting backend data with the UI.',

      solution:
        'Implemented the required API integrations and connected API responses with the relevant frontend components and application workflows.'
    },

    {
      challenge:
        'Fixing existing UI and functionality issues without disrupting other parts of the application.',

      solution:
        'Kept changes scoped to the relevant modules, fixed the affected components and workflows, and verified the updated functionality after implementation.'
    }
  ],

  liveUrl: 'https://oms.enigmatix.co/',
  githubUrl: '',
},

  {
    id: 'roomify',
    title: 'Roomify',
    category: 'Frontend Development',
    shortDescription:
      'A modern interior design platform where users can explore inspiration and interact with a dedicated design experience.',

    description:
      'Roomify is a frontend-focused interior design platform designed to provide users with an engaging way to explore interior design inspiration and work with design-focused experiences. I designed and developed the frontend experience and integrated Firebase to support the application functionality.',

    image: Roomify,
    mediaType: 'image',

    screenshots: [],

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'React Router',
      'Responsive Design',
    ],

    features: [
      'Modern interior design interface',
      'Responsive design',
      'Interior inspiration browsing',
      'Design Studio experience',
      'Interactive user interface',
      'Dark/Light theme support',
      'Reusable React components',
      'Firebase integration',
      'Responsive mobile navigation',
    ],

    role:
      'Frontend Developer responsible for designing and developing the complete frontend experience, creating reusable components, implementing responsive layouts, building the design-focused user experience, and integrating Firebase functionality.',

    implementation:
      'Designed and developed the frontend from the ground up using React and Tailwind CSS. Created reusable components and responsive layouts for the main application sections, implemented routing between different experiences, built the Design Studio and inspiration-focused interfaces, and integrated Firebase for application functionality and data-related requirements.',

    challenges: [
      {
        challenge:
          'Creating a visually attractive interior-design experience while keeping the interface easy to navigate.',
        solution:
          'Focused on a clean visual hierarchy, reusable UI components, consistent spacing, strong imagery, and responsive layouts across the application.',
      },
      {
        challenge:
          'Building a responsive design experience that works across desktop and mobile screens.',
        solution:
          'Implemented responsive layouts and mobile-specific navigation behavior while testing the major sections across different screen sizes.',
      },
      {
        challenge:
          'Connecting the frontend application with Firebase functionality.',
        solution:
          'Integrated Firebase into the frontend architecture and connected the required application flows while keeping the UI and data interactions consistent.',
      },
    ],

    liveUrl: 'https://roomify-livid.vercel.app',
    githubUrl: 'https://github.com/Sawera-Malik/Roomify',
  },

  {
  id: 'organization-management',
  title: 'Organization Management Dashboard',
  category: 'Frontend Development',

  shortDescription:
    'A modern enterprise organization management dashboard designed to manage organizational information, workflows, and operations through a clean and responsive interface.',

  description:
    'Organization Management Dashboard is a modern frontend application designed to provide a structured workspace for managing organization-related information and workflows. The project focuses on creating a professional dashboard experience with clear navigation, reusable components, responsive layouts, and an intuitive user interface.',

  image: organization,
  mediaType: 'video',

  screenshots: [],

  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'React Router',
    'JavaScript',
    'Responsive Design',
  ],

  features: [
    'Organization management dashboard',
    'Organization information management',
    'Dashboard-based workflows',
    'Responsive user interface',
    'Reusable React components',
    'Client-side routing',
    'Modern Tailwind CSS UI',
    'Type-safe development with TypeScript',
    'Clean and structured navigation',
    'Responsive layouts for different screen sizes',
  ],

  role:
    'Frontend Developer responsible for designing and developing the dashboard interface, building reusable React components, implementing responsive layouts, configuring client-side navigation, and creating a clean and intuitive organization management experience.',

  implementation:
    'Built the frontend using React and TypeScript with Tailwind CSS for the interface styling. The application was structured using reusable components and React Router for navigation between different sections. The dashboard focuses on a clean information hierarchy, responsive layouts, and reusable UI patterns to make organization-related workflows easier to manage.',

  challenges: [
    {
      challenge:
        'Designing a dashboard that can present a large amount of organization-related information without making the interface feel cluttered.',

      solution:
        'Used a structured dashboard layout with clear sections, consistent spacing, reusable components, and a focused visual hierarchy to make information easier to scan.',
    },

    {
      challenge:
        'Creating a consistent UI across multiple dashboard sections.',

      solution:
        'Built reusable React components and followed consistent Tailwind CSS styling patterns for buttons, cards, forms, navigation, and other interface elements.',
    },

    {
      challenge:
        'Making the dashboard responsive across desktop, tablet, and mobile screens.',

      solution:
        'Implemented responsive Tailwind CSS layouts and adjusted navigation, spacing, components, and content presentation for different viewport sizes.',
    },
  ],

  liveUrl: 'https://organization-management-dashboard.vercel.app/dashboard',
  githubUrl: 'https://github.com/Sawera-Malik/organization-management-dashboard',
},
];

export default projects;
