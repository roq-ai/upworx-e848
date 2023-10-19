import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  application_status: yup.string().nullable(),
  application_date: yup.date().required(),
  freelancer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
  job_posting_id: yup.string().nullable().required(),
});
