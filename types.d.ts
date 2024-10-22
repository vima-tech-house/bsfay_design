interface FeaturedWork {
  title: string;
  description: string;
  image: string;
  location: string;
  style: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    location: string;
    style: string;
    description: string;
    image: string;
  };
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ValueCard {
  title: string;
  description: string;
  icon: string;
}
