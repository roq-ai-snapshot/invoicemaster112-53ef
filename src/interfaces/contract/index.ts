import { OrganisationInterface } from 'interfaces/organisation';

export interface ContractInterface {
  id?: string;
  organisation_id: string;
  client_name: string;
  start_date: Date;
  end_date: Date;
  terms: string;

  organisation?: OrganisationInterface;
  _count?: {};
}
