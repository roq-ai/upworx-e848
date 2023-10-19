import { ApplicationInterface } from 'interfaces/application';
import { ContractInterface } from 'interfaces/contract';
import { JobPostingInterface } from 'interfaces/job-posting';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  application?: ApplicationInterface[];
  contract?: ContractInterface[];
  job_posting?: JobPostingInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    contract?: number;
    job_posting?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
