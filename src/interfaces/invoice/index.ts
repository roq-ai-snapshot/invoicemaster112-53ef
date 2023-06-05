import { PaymentInterface } from 'interfaces/payment';
import { OrganisationInterface } from 'interfaces/organisation';

export interface InvoiceInterface {
  id?: string;
  organisation_id: string;
  client_name: string;
  amount: number;
  due_date: Date;
  status: string;
  payment?: PaymentInterface[];
  organisation?: OrganisationInterface;
  _count?: {
    payment?: number;
  };
}
