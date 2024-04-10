import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  tel: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  tel: Yup.string(),
});

export default function ContactForm({ initial, onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  const nameFieldId = useId();
  const telFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <label htmlFor={telFieldId}>Number</label>
        <Field type="tel" name="number" id={telFieldId} />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
