import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  ArrowLeft,
  Home,
  Book,
  Search,
  Users,
  GraduationCap,
  NewspaperIcon,
  Calendar,
  Briefcase,
  Phone,
  MoveRight,
  Globe,
  Info,
  School,
  UserPlus,
  UserCheck,
  Target,
  Building2,
  FileText,
  FileCheck2,
  BookOpen,
  FileSignature,
  ClipboardCheck,
  Award,
  FlaskConical,
  BadgeCheck,
  Library,
  MessageSquare,
  FolderGit2,
  Bell,
  MessageCircleWarning,
  Cpu,
  CircuitBoard,
  Cog,
  Atom,
  Code2,
  CreditCard,
  Images,
  ScrollText,
  Folder,
  Lightbulb,
} from 'lucide-react'

// Interface for a single dropdown item
interface DropdownItem {
  name: string
  href: string
  icon?: React.ReactNode // Optional icon for the item
  target?: string // Optional target attribute for links (e.g., '_blank')
  rel?: string // Optional rel attribute for links (e.g., 'noopener noreferrer')
}

// Interface for the overall dropdown content structure
interface DropdownContent {
  [key: string]: DropdownItem[] // A dictionary where keys are section names and values are arrays of DropdownItem
}

/**
 * @description Defines the content for various dropdown menus in the navigation.
 * Each key represents a dropdown section (e.g., "About", "Academics"),
 * and its value is an array of objects, each representing a link within that section.
 * Icons from 'lucide-react' are used for visual representation.
 */
export const dropdownContent: DropdownContent = {
  About: [
    {
      name: 'About CRCE',
      href: '/about/about-crce',
      icon: <Info size={18} />,
    },
    {
      name: "From Director's ",
      href: '/about/from-directors',
      icon: <UserPlus size={18} />,
    },
    {
      name: 'Principal- Dr. Surendra Singh Rathod',
      href: '/about/principal',
      icon: <UserCheck size={18} />,
    },
    {
      name: 'Vision and Mission',
      href: '/about/vision-and-mission',
      icon: <Target size={18} />,
    },
    {
      name: 'Administration',
      href: '/about/administration',
      icon: <Building2 size={18} />,
    },
    {
      name: 'General Information',
      href: '/about/general-information',
      icon: <FileText size={18} />,
    },
    {
      name: 'Mandatory Disclosure',
      href: '/about/mandatory-disclosure',
      icon: <FileCheck2 size={18} />,
    },
    {
      name: 'Contact Us',
      href: '/about/contact-us',
      icon: <Phone size={18} />,
    },
    {
      name: 'Public File Browser',
      href: '/folders',
      icon: <Folder size={18} />,
    },
  ],
  Academics: [
    {
      name: 'Autonomous Curriculum',
      href: '/academics/autonomous/autonomous',
      icon: <BookOpen size={18} />,
    },
    {
      name: 'Academic/Holiday Calender',
      href: '/academics/calendar',
      icon: <Calendar size={18} />,
    },
    {
      name: 'Outreach Programmes',
      href: '/academics/outreach',
      icon: <ClipboardCheck size={18} />,
    },
    {
      name: "List of MOU's",
      href: '/academics/mou',
      icon: <FileSignature size={18} />,
    },
    {
      name: 'Examination',
      href: '/academics/examination',
      icon: <ClipboardCheck size={18} />,
    },
    {
      name: 'Teaching Learning Process',
      href: '/academics/teaching',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'NAAC',
      href: '/academics/naac',
      icon: <Award size={18} />,
    },
    {
      name: 'Research & Development',
      href: '/academics/research',
      icon: <FlaskConical size={18} />,
    },
    {
      name: 'Lesson Plan',
      href: '/academics/lesson',
      icon: <BookOpen size={18} />,
    },
    {
      name: 'IQAC-CRCE',
      href: '/academics/IQAC',
      icon: <BadgeCheck size={18} />,
    },
    {
      name: 'Library',
      href: '/academics/library',
      icon: <Library size={18} />,
    },
  ],
  Students: [
    {
      name: 'Campus Placements',
      href: '/students/placements',
      icon: <Briefcase size={18} />,
    },
    {
      name: 'Councils',
      href: '/students/councils',
      icon: <UserPlus size={18} />,
    },
    {
      name: 'Project Groups',
      href: '/students/project_teams',
      icon: <FolderGit2 size={18} />,
    },
    {
      name: 'Alumni',
      href: 'https://alumni.frcrce.ac.in',
      icon: <UserCheck size={18} />,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'Notices',
      href: '/students/notices',
      icon: <Bell size={18} />,
    },
    {
      name: 'Students Information',
      href: '/students/student-info',
      icon: <FileText size={18} />,
    },
    {
      name: 'Grievances',
      href: '/students/grievance-policy',
      icon: <MessageCircleWarning size={18} />,
    },
  ],
  Departments: [
    {
      name: 'Computer Engineering',
      href: '/department/computers',
      icon: <Cpu size={18} />,
    },
    {
      name: 'Electronics and Computer Science',
      href: '/department/ecs',
      icon: <CircuitBoard size={18} />,
    },
    {
      name: 'Mechanical Engineering',
      href: '/department/mechanical',
      icon: <Cog size={18} />,
    },
    {
      name: 'Computer Science and Engineering',
      href: '/department/cse',
      icon: <Code2 size={18} />,
    },
    {
      name: 'Science and Humanities',
      href: '/department/humanities',
      icon: <Atom size={18} />,
    },
  ],
  Admission: [
    {
      name: 'Under Graduate',
      href: '/admission/undergrad',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'Post Graduate',
      href: '/admission/postgraduate',
      icon: <School size={18} />,
    },
    {
      name: 'Ph.D',
      href: '/admission/phd',
      icon: <Award size={18} />,
    },
  ],
  Online: [
    {
      name: 'Make Online Payment',
      href: 'https://pay.fragnel.edu.in/CRCE/initPay.php',
      icon: <CreditCard size={18} />,
    },
  ],
}

/**
 * @description Creates a flattened array of all dropdown items,
 * including their section, name, and href. This is useful for
 * creating a comprehensive index, sitemap, or search functionality.
 */
export const dropdownIndexItems = Object.entries(dropdownContent).flatMap(
  ([section, items]) =>
    items.map(({ name, href }) => ({
      section,
      name,
      href,
    }))
)
