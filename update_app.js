const fs = require('fs');
let code = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', 'utf8');

// Replace import statement to remove Instagram and CheckCircle2
const oldImport = import {
  MessageCircle,
  Globe,
  Instagram,
  Search,
  Check,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Menu,
  X,
  Smartphone,
  Star,
  CheckCircle2,
  Video
} from 'lucide-react';;

const newImport = import {
  MessageCircle,
  Globe,
  Search,
  Check,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Menu,
  X,
  Smartphone,
  Star,
  Video
} from 'lucide-react';

// Custom inline SVG for Instagram (lucide-react does not bundle brand icons)
const Instagram: React.FC<{ className?: string }> = ({ className =  w-5 h-5 }) => (
  <svg 
    viewBox=0 0 24 24 
    fill=none 
    stroke=currentColor 
    strokeWidth=2 
    strokeLinecap=round 
    strokeLinejoin=round 
    className={className}
  >
    <rect width=20 height=20 x=2 y=2 rx=5 ry=5/>
    <path d=M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z/>
    <line x1=17.5 x2=17.51 y1=6.5 y2=6.5/>
  </svg>
);;

code = code.replace(oldImport, newImport);

// Replace CheckCircle2 with Check
code = code.replace(/<CheckCircle2 className=w-3\.5 h-3\.5 \/>/g, '<Check className=w-3.5 h-3.5 />');

fs.writeFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', code, 'utf8');
console.log('Successfully updated App.tsx!');
