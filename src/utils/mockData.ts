import { Artist, Event, Manager, Booking } from '../types';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@example.com',
    profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: ['Classical', 'Bollywood'],
    location: 'Mumbai',
    experience: 8,
    rating: 4.8,
    priceRange: '₹25,000 - ₹50,000',
    availability: true,
    portfolio: {
      images: [
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      videos: ['video1.mp4'],
      audio: ['track1.mp3']
    },
    socialMedia: {
      instagram: '@arjunsharmamusic',
      youtube: 'ArjunSharmaOfficial',
      spotify: 'arjun-sharma'
    },
    description: 'Professional classical and Bollywood vocalist with 8+ years of experience. Specializes in live performances and studio recordings.',
    skills: ['Vocals', 'Harmonium', 'Stage Performance'],
    performanceHistory: [
      {
        id: '1',
        eventName: 'Mumbai Music Festival',
        venue: 'NSCI Dome',
        date: '2024-01-15',
        rating: 4.9,
        feedback: 'Outstanding performance'
      }
    ],
    verificationStatus: 'verified',
    joinedDate: '2023-06-15'
  },
  {
    id: '2',
    name: 'Priya Rajesh',
    email: 'priya.rajesh@example.com',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: ['Contemporary', 'Folk'],
    location: 'Delhi',
    experience: 5,
    rating: 4.5,
    priceRange: '₹15,000 - ₹30,000',
    availability: true,
    portfolio: {
      images: [
        'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      videos: [],
      audio: []
    },
    socialMedia: {
      instagram: '@priyarajeshmusic'
    },
    description: 'Versatile singer specializing in contemporary and folk music. Known for soulful performances and crowd engagement.',
    skills: ['Vocals', 'Guitar', 'Songwriting'],
    performanceHistory: [],
    verificationStatus: 'verified',
    joinedDate: '2023-08-20'
  },
  {
    id: '3',
    name: 'Rohit Mehta',
    email: 'rohit.mehta@example.com',
    profileImage: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: ['Rock', 'Pop'],
    location: 'Bangalore',
    experience: 10,
    rating: 4.9,
    priceRange: '₹40,000 - ₹75,000',
    availability: false,
    portfolio: {
      images: [
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      videos: [],
      audio: []
    },
    socialMedia: {
      instagram: '@rohitmehta_music',
      youtube: 'RohitMehtaBand'
    },
    description: 'Lead guitarist and vocalist with 10 years in the rock scene. Has performed at major festivals across India.',
    skills: ['Guitar', 'Vocals', 'Bass'],
    performanceHistory: [],
    verificationStatus: 'verified',
    joinedDate: '2023-03-10'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Corporate Annual Gala',
    description: 'Annual celebration for company employees and partners',
    date: '2024-03-15',
    venue: 'Grand Ballroom, Hotel Taj',
    location: 'Mumbai',
    type: 'Corporate',
    budget: 150000,
    requiredGenres: ['Classical', 'Contemporary'],
    status: 'planning',
    organizerId: '1',
    capacity: 500,
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'Wedding Reception',
    description: 'Elegant wedding reception celebrating love and music',
    date: '2024-04-20',
    venue: 'Palace Gardens',
    location: 'Delhi',
    type: 'Wedding',
    budget: 200000,
    requiredGenres: ['Bollywood', 'Folk'],
    status: 'confirmed',
    organizerId: '1',
    artistId: '1',
    capacity: 300,
    imageUrl: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockManager: Manager = {
  id: '1',
  name: 'Amit Patel',
  email: 'amit.patel@eventful.com',
  company: 'Eventful India',
  role: 'Event Manager',
  avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
};

export const mockBookings: Booking[] = [
  {
    id: '1',
    eventId: '2',
    artistId: '1',
    managerId: '1',
    status: 'confirmed',
    proposedPrice: 45000,
    finalPrice: 50000,
    messages: [
      {
        id: '1',
        senderId: '1',
        senderType: 'manager',
        content: 'Hello Arjun, we would like to book you for our wedding reception.',
        timestamp: '2024-01-20T10:00:00Z'
      },
      {
        id: '2',
        senderId: '1',
        senderType: 'artist',
        content: 'Thank you for reaching out! I would be delighted to perform at your event.',
        timestamp: '2024-01-20T10:30:00Z'
      }
    ],
    createdAt: '2024-01-20T09:00:00Z',
    updatedAt: '2024-01-20T11:00:00Z'
  }
];