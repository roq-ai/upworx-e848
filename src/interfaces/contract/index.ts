import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  contract_status?: string;
  freelancer_id: string;
  contract_expiration_date?: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  contract_status?: string;
  freelancer_id?: string;
  company_id?: string;
}
