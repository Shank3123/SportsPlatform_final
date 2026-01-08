import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

interface RegisterData {
  email: string;
  password: string;
  username: string;
  fullName: string;
  role: 'user' | 'coach' | 'fan' | 'aspirant';
  sportsCategory: 'coco' | 'martial-arts' | 'calorie-fight' | 'adaptive-sports' | 'unstructured-sports';
  gender: 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';
  accessibilityNeeds?: string[];
  preferredAccommodations?: string[];
  sportRole?: any;
  sportInterests?: string[];
  isProfessional?: boolean;
  verificationStatus?: 'pending' | 'approved' | 'rejected';
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Mock API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user database - in real app, this would be fetched from backend
      const mockUserDatabase: Record<string, User> = {
        'coach@martial.com': {
          id: '1',
          email: 'coach@martial.com',
          username: 'martialcoach',
          fullName: 'Sarah Johnson',
          role: 'coach',
          sportsCategory: 'martial-arts',
          gender: 'female',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Professional martial arts instructor with 10+ years experience',
          followers: 2500,
          following: 150,
          posts: 89,
          createdAt: '2024-01-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'user@martial.com': {
          id: '2',
          email: 'user@martial.com',
          username: 'martialuser',
          fullName: 'Emma Davis',
          role: 'user',
          sportsCategory: 'martial-arts',
          gender: 'female',
          isVerified: false,
          profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Martial arts enthusiast, always learning',
          followers: 150,
          following: 45,
          posts: 0,
          createdAt: '2024-02-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'coach@coco.com': {
          id: '3',
          email: 'coach@coco.com',
          username: 'cococoach',
          fullName: 'Alex Rodriguez',
          role: 'coach',
          sportsCategory: 'coco',
          gender: 'male',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Coco sport specialist and performance coach',
          followers: 1200,
          following: 80,
          posts: 67,
          createdAt: '2024-01-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'user@coco.com': {
          id: '4',
          email: 'user@coco.com',
          username: 'cocouser',
          fullName: 'Maria Garcia',
          role: 'user',
          sportsCategory: 'coco',
          gender: 'female',
          isVerified: false,
          profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Coco enthusiast, learning from the best',
          followers: 89,
          following: 23,
          posts: 0,
          createdAt: '2024-02-15T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'coach@calorie.com': {
          id: '5',
          email: 'coach@calorie.com',
          username: 'caloriecoach',
          fullName: 'Mike Chen',
          role: 'coach',
          sportsCategory: 'calorie-fight',
          gender: 'male',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Certified fitness trainer specializing in calorie burning workouts',
          followers: 1800,
          following: 200,
          posts: 156,
          createdAt: '2024-01-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'user@calorie.com': {
          id: '6',
          email: 'user@calorie.com',
          username: 'calorieuser',
          fullName: 'John Smith',
          role: 'user',
          sportsCategory: 'calorie-fight',
          gender: 'male',
          isVerified: false,
          profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Fitness enthusiast on a weight loss journey',
          followers: 89,
          following: 67,
          posts: 0,
          createdAt: '2024-02-15T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
        },
        'expert@sports.com': {
          id: '7',
          email: 'expert@sports.com',
          username: 'sportsexpert',
          fullName: 'Dr. Lisa Thompson',
          role: 'expert',
          sportsCategory: 'martial-arts',
          gender: 'female',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Sports medicine expert and verification specialist',
          followers: 5000,
          following: 100,
          posts: 0,
          createdAt: '2024-01-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
          sportRole: undefined,
          sportInterests: [],
          isProfessional: true,
          verificationStatus: 'approved',
          evidenceDocuments: [],
        },
        'fan@martial.com': {
          id: '8',
          email: 'fan@martial.com',
          username: 'martialfan',
          fullName: 'Alex Chen',
          role: 'fan',
          sportsCategory: 'martial-arts',
          gender: 'male',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Martial arts enthusiast and supporter',
          followers: 45,
          following: 120,
          posts: 5,
          createdAt: '2024-02-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
          sportRole: undefined,
          sportInterests: ['Martial Arts', 'Competition Watching', 'Training Videos'],
          isProfessional: false,
          verificationStatus: 'approved',
          evidenceDocuments: [],
        },
        'aspirant@fitness.com': {
          id: '9',
          email: 'aspirant@fitness.com',
          username: 'fitnessaspirant',
          fullName: 'Jordan Smith',
          role: 'aspirant',
          sportsCategory: 'calorie-fight',
          gender: 'non-binary',
          isVerified: false,
          profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Aspiring personal trainer working towards certification',
          followers: 12,
          following: 35,
          posts: 2,
          createdAt: '2024-02-15T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
          sportRole: {
            id: 'cf-1',
            name: 'Personal Trainer',
            category: 'calorie-fight',
            description: 'Certified personal trainer',
            isProfessional: true,
            requiresEvidence: true,
            evidenceTypes: ['certificate', 'license']
          },
          sportInterests: [],
          isProfessional: true,
          verificationStatus: 'pending',
          evidenceDocuments: [],
        },
        'admin@sports.com': {
          id: '10',
          email: 'admin@sports.com',
          username: 'sportsadmin',
          fullName: 'Admin User',
          role: 'administrator',
          sportsCategory: 'martial-arts',
          gender: 'prefer-not-to-say',
          isVerified: true,
          profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
          bio: 'Platform administrator and verification specialist',
          followers: 0,
          following: 0,
          posts: 0,
          createdAt: '2024-01-01T00:00:00Z',
          accessibilityNeeds: [],
          preferredAccommodations: [],
          sportRole: undefined,
          sportInterests: [],
          isProfessional: true,
          verificationStatus: 'approved',
          evidenceDocuments: [],
        },
      };
      
      // Find user by email
      const mockUser = mockUserDatabase[email.toLowerCase().trim()];
      
      if (!mockUser) {
        throw new Error('Invalid credentials. Please use one of the demo emails provided.');
      }
      
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (userData: RegisterData) => {
    set({ isLoading: true });
    try {
      // Mock API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        username: userData.username,
        fullName: userData.fullName,
        role: userData.role,
        sportsCategory: userData.sportsCategory,
        gender: userData.gender,
        isVerified: userData.verificationStatus === 'approved',
        followers: 0,
        following: 0,
        posts: 0,
        createdAt: new Date().toISOString(),
        accessibilityNeeds: userData.accessibilityNeeds || [],
        preferredAccommodations: userData.preferredAccommodations || [],
        sportRole: userData.sportRole,
        sportInterests: userData.sportInterests || [],
        isProfessional: userData.isProfessional || false,
        verificationStatus: userData.verificationStatus || 'approved',
        evidenceDocuments: [],
      };
      
      set({ user: newUser, isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  updateUser: (userData: Partial<User>) => {
    const currentUser = get().user;
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      set({ user: updatedUser });
    }
  },
}));