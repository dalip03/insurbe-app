// app/stores/premiumStore.ts
import { create } from "zustand";

type Doc = {
  kurz?: string;
  base64: string;
};

type FormState = {
  title?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  coverageStart?: string;
  employmentStatus?: string;
  planNameVersion?: string;
  age?: number | string;
  hasSchengenVisa?: "yes" | "no" | "";
};

type PremiumStore = {
  form: FormState;
  selectedPlanId?: string | null;
  premium: number | null;
  tkPremium: number | null; // Added TK Premium
  documents: Doc[];
  setForm: (patch: Partial<FormState>) => void;
  setSelectedPlan: (planId: string | null) => void;
  setPremium: (val: number | null) => void;
  setTKPremium: (val: number | null) => void; // Added setter for TK Premium
  setDocuments: (docs: Doc[]) => void;
  reset: () => void;
};

export const usePremiumStore = create<PremiumStore>((set) => ({
  form: {},
  selectedPlanId: null,
  premium: null,
  tkPremium: null, // Initialize TK Premium
  documents: [],
  setForm: (patch) => set((s) => ({ form: { ...s.form, ...patch } })),
  setSelectedPlan: (planId) => set({ selectedPlanId: planId }),
  setPremium: (val) => set({ premium: val }),
  setTKPremium: (val) => set({ tkPremium: val }), // Setter for TK Premium
  setDocuments: (docs) => set({ documents: docs }),
  reset: () => set({ 
    form: {}, 
    selectedPlanId: null, 
    premium: null, 
    tkPremium: null, // Reset TK Premium
    documents: [] 
  }),
}));
