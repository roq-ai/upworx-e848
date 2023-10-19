import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  contract_status: yup.string().nullable(),
  contract_expiration_date: yup.date().nullable(),
  freelancer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
