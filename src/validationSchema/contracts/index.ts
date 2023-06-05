import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  client_name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  terms: yup.string().required(),
  organisation_id: yup.string().nullable().required(),
});
