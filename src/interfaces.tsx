export interface IJob {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
  location: { lat: number; lng: number; long?: number };
  displayLocation?: string;
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
  responsibilities: string;
  benefitsDesc: string[];
}
