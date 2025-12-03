// app/stores/journeyStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JourneyState {
  // Journey data
  employmentStatus: string;
  otherEmployment: string;
  incomeRange: string;
  actualIncome: number | null; // Added actual income value
  email: string;
  phone: string;
  selectedCountry: string;
  dob: string;
  hasChildren: boolean | null; // Added hasChildren
  
  // Actions
  setEmploymentStatus: (status: string) => void;
  setOtherEmployment: (other: string) => void;
  setIncomeRange: (range: string) => void;
  setActualIncome: (income: number | null) => void; // Added actualIncome setter
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setSelectedCountry: (country: string) => void;
  setDob: (dob: string) => void;
  setHasChildren: (hasChildren: boolean | null) => void; // Added hasChildren setter
  setJourneyData: (data: Partial<JourneyState>) => void;
  clearJourneyData: () => void;
}

export const useJourneyStore = create<JourneyState>()(
  persist(
    (set) => ({
      // Initial state
      employmentStatus: '',
      otherEmployment: '',
      incomeRange: '',
      actualIncome: null, // Added actualIncome initial state
      email: '',
      phone: '',
      selectedCountry: '',
      dob: '',
      hasChildren: null, // Added hasChildren initial state

      // Actions
      setEmploymentStatus: (status) => set({ employmentStatus: status }),
      setOtherEmployment: (other) => set({ otherEmployment: other }),
      setIncomeRange: (range) => set({ incomeRange: range }),
      setActualIncome: (income) => set({ actualIncome: income }), // Added actualIncome setter
      setEmail: (email) => set({ email }),
      setPhone: (phone) => set({ phone }),
      setSelectedCountry: (country) => set({ selectedCountry: country }),
      setDob: (dob) => set({ dob }),
      setHasChildren: (hasChildren) => set({ hasChildren }), // Added hasChildren setter
      
      setJourneyData: (data) => set((state) => ({ ...state, ...data })),
      
      clearJourneyData: () => set({
        employmentStatus: '',
        otherEmployment: '',
        incomeRange: '',
        actualIncome: null, // Added actualIncome to clear function
        email: '',
        phone: '',
        selectedCountry: '',
        dob: '',
        hasChildren: null, // Added hasChildren to clear function
      }),
    }),
    {
      name: 'journey-storage', // localStorage key
    }
  )
);
