export type StaffRow = {
  typeOfResource: number;
  numberOfResources: number;
  contractTenure: number;
};

export type RoiLeadFormValues = {
  full_name: string;
  email: string;
  mobile_number: string;
  looking_for: string;
  message: string;
  Source?: string | null;
  city?: string;
  country?: string;
  page?: string;
  ip?: string;
  staffRows?: StaffRow[];
};
