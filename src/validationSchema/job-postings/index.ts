import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  job_description: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
