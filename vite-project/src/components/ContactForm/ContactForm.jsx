import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  name: "",
  tel: "",
};
export default function ContactForm({ initial, onAdd }) {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  const nameFieldId = useId();
  const telFieldId = useId();

  return (
    <Formik initialValues={{ initialValues }} onSubmit={(handleSubmit) => {}}>
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
