import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  userType: yup.mixed().oneOf(["0", "1"]),
  itemType: yup.mixed().oneOf(["0", "1"]),
  price: yup.number().min(1),
  endDate: yup.date().min(new Date()),
});

const useItemForm = ({ initialValues, handleSubmit }) => {
  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
};

export default useItemForm;
