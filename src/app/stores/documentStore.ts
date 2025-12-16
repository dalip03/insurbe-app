import { create } from 'zustand';

interface DocumentState {
  halleschePremiumDocs: any[];
  hallescheExpatDocs: any[];
  setHalleschePremiumDocs: (docs: any[]) => void;
  setHallescheExpatDocs: (docs: any[]) => void;
  clearDocuments: () => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  halleschePremiumDocs: [],
  hallescheExpatDocs: [],
  setHalleschePremiumDocs: (docs) => set({ halleschePremiumDocs: docs }),
  setHallescheExpatDocs: (docs) => set({ hallescheExpatDocs: docs }),
  clearDocuments: () => set({ 
    halleschePremiumDocs: [], 
    hallescheExpatDocs: [] 
  }),
}));
