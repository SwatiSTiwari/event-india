import { create } from 'zustand';
import { Artist, Event, Manager, Booking, NotificationItem, FilterOptions } from '../types';

interface AppState {
  // Theme
  darkMode: boolean;
  toggleDarkMode: () => void;
  
  // Authentication
  currentUser: Manager | null;
  isAuthenticated: boolean;
  login: (user: Manager) => void;
  logout: () => void;
  
  // Artists
  artists: Artist[];
  filteredArtists: Artist[];
  artistFilters: FilterOptions;
  setArtistFilters: (filters: Partial<FilterOptions>) => void;
  addArtist: (artist: Artist) => void;
  updateArtist: (id: string, updates: Partial<Artist>) => void;
  
  // Events
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (id: string, updates: Partial<Event>) => void;
  
  // Bookings
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  
  // Notifications
  notifications: NotificationItem[];
  addNotification: (notification: Omit<NotificationItem, 'id'>) => void;
  markNotificationRead: (id: string) => void;
  unreadCount: number;
  
  // UI State
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Theme
  darkMode: false,
  toggleDarkMode: () => {
    const { darkMode } = get();
    const newMode = !darkMode;
    set({ darkMode: newMode });
    document.documentElement.classList.toggle('dark', newMode);
  },
  
  // Authentication
  currentUser: null,
  isAuthenticated: false,
  login: (user) => set({ currentUser: user, isAuthenticated: true }),
  logout: () => set({ currentUser: null, isAuthenticated: false }),
  
  // Artists
  artists: [],
  filteredArtists: [],
  artistFilters: {
    genres: [],
    location: '',
    priceRange: [0, 100000],
    rating: 0,
    availability: false,
    experience: 0,
  },
  
  setArtistFilters: (filters) => {
    const { artists, artistFilters } = get();
    const newFilters = { ...artistFilters, ...filters };
    
    const filtered = artists.filter(artist => {
      if (newFilters.genres.length > 0 && !newFilters.genres.some(genre => artist.genre.includes(genre))) {
        return false;
      }
      if (newFilters.location && !artist.location.toLowerCase().includes(newFilters.location.toLowerCase())) {
        return false;
      }
      if (artist.rating < newFilters.rating) {
        return false;
      }
      if (newFilters.availability && !artist.availability) {
        return false;
      }
      if (artist.experience < newFilters.experience) {
        return false;
      }
      return true;
    });
    
    set({ artistFilters: newFilters, filteredArtists: filtered });
  },
  
  addArtist: (artist) => {
    const { artists } = get();
    const newArtists = [...artists, artist];
    set({ artists: newArtists, filteredArtists: newArtists });
  },
  
  updateArtist: (id, updates) => {
    const { artists } = get();
    const newArtists = artists.map(artist => 
      artist.id === id ? { ...artist, ...updates } : artist
    );
    set({ artists: newArtists });
  },
  
  // Events
  events: [],
  addEvent: (event) => {
    const { events } = get();
    set({ events: [...events, event] });
  },
  
  updateEvent: (id, updates) => {
    const { events } = get();
    const newEvents = events.map(event => 
      event.id === id ? { ...event, ...updates } : event
    );
    set({ events: newEvents });
  },
  
  // Bookings
  bookings: [],
  addBooking: (booking) => {
    const { bookings } = get();
    set({ bookings: [...bookings, booking] });
  },
  
  updateBooking: (id, updates) => {
    const { bookings } = get();
    const newBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, ...updates } : booking
    );
    set({ bookings: newBookings });
  },
  
  // Notifications
  notifications: [],
  addNotification: (notification) => {
    const { notifications } = get();
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
    };
    set({ 
      notifications: [newNotification, ...notifications],
      unreadCount: get().unreadCount + 1
    });
  },
  
  markNotificationRead: (id) => {
    const { notifications } = get();
    const newNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    const unreadCount = newNotifications.filter(n => !n.read).length;
    set({ notifications: newNotifications, unreadCount });
  },
  
  unreadCount: 0,
  
  // UI State
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));