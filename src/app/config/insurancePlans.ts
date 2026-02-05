export const INSURANCE_PLANS = {
  expat: {
    heading: "Expat health insurance application",
    plans: {
      basic: {
        label: "Basic",
        price: "€72.89",
        tariffId: "35659",
      },
      premium: {
        label: "Premium",
        price: "€147.88",
        tariffId: "35660",
      },
    },
  },

  student: {
    heading: "Student health insurance application",
    plans: {
      basic: {
        label: "Student Basic",
        price: "€39.99",
        tariffId: "40001",
      },
    },
  },

  private: {
    heading: "Private health insurance application",
    plans: {
      full: {
        label: "Private Full Cover",
        price: "€199.00",
        tariffId: "50001",
      },
    },
  },
} as const;
