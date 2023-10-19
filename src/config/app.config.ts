interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Apply for jobs.', 'Edit personal information.', 'View job postings.', 'View contracts.'],
  ownerAbilities: ['Manage contracts', 'Manage applications', 'Manage job postings', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a8fddbf6-e8c1-45eb-b84a-18f8444923e8',
};
