import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  application_status?: string;
  application_date: any;
  freelancer_id: string;
  company_id: string;
  job_posting_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  application_status?: string;
  freelancer_id?: string;
  company_id?: string;
  job_posting_id?: string;
}
