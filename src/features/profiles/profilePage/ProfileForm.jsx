import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTexArea";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateuserProfile } from "../../../app/firestore/firestoreService";

export function ProfileForm({ profile }) {
  return (
    <Formik
      initialValues={{
        displayName: profile.displayName,
        description: profile.description || "",
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
      })}
      onSubmit={ async (values, {setSubmitting}) => {
        try {
            await updateuserProfile(values);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
      }
    

}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="ui form">
          <MyTextInput name="displayName" placeholder="Display Name" />
          <MyTextArea name="description" placeholder="Description" />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated='right'
            type="submit"
            size="large"
            positive
            content="Update profile"
          />
        </Form>
      )}
    </Formik>
  );
}
