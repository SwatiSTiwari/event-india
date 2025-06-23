export interface Artist {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  genre: string[];
  location: string;
  experience: number;
  rating: number;
  priceRange: string;
  availability: boolean;
  portfolio: {
    images: string[];
    videos: string[];
    audio: string[];
  };
  socialMedia: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  description: string;
  skills: string[];
  performanceHistory: Performance[];
  verificationStatus: 'pending' | 'verified' | 'rejected';
  joinedDate: string;
}

export interface Performance {
  id: string;
  eventName: string;
  venue: string;
  date: string;
  rating: number;
  feedback?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  location: string;
  type: string;
  budget: number;
  requiredGenres: string[];
  status: 'planning' | 'confirmed' | 'completed' | 'cancelled';
  organizerId: string;
  artistId?: string;
  capacity: number;
  imageUrl: string;
}

export interface Manager {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  avatar: string;
}

export interface Booking {
  id: string;
  eventId: string;
  artistId: string;
  managerId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  proposedPrice: number;
  finalPrice?: number;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderType: 'manager' | 'artist';
  content: string;
  timestamp: string;
  attachments?: string[];
}

export interface NotificationItem {
  id: string;
  type: 'booking' | 'message' | 'event' | 'verification';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface FilterOptions {
  genres: string[];
  location: string;
  priceRange: [number, number];
  rating: number;
  availability: boolean;
  experience: number;
}