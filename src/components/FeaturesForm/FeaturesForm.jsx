import { Field, Form, Formik } from "formik";
import css from "./FeaturesForm.module.css";

export const FeaturesForm = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: "", email: "", date: "", comment: "" }}
        onSubmit={() => {
          window.location.reload();
        }}
      >
        <Form>
          <Field
            className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <Field
            className={css.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <Field
            className={css.input}
            type="date"
            id="date"
            name="date"
            placeholder="Booking date"
            required
          />
          <Field
            as="textarea"
            className={css.comment}
            id="comment"
            name="comment"
            placeholder="Comment"
          ></Field>
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
