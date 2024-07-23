"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";

const Contact = ({ contacttranslations }) => {
  const { register, handleSubmit } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    sendEmail(data);
    setMessageSent(true)
  }


  return (
    <div className={styles.formcontainer}>
  

      {messageSent ? (<>
      <div className={styles.messagesent}>

        <h3>
        Thank you very much for your message, we will contact you shortly.
        </h3>

      </div>
      </>) : <>
      <h3>{contacttranslations.message}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            placeholder={contacttranslations.form1}
            className={styles.input}
            {...register("name", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="email"
            placeholder={contacttranslations.form2}
            className={styles.input}
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="tel"
            placeholder={contacttranslations.form3}
            className={styles.input}
            {...register("phone", { required: true })}
          />
        </div>
        <div className={styles.inputcontainertextarea}>
          <textarea
            placeholder={contacttranslations.form4}
            className={`${styles.input} ${styles.textarea}`}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className={styles.buttoncontainer}>
          {/* <Button text="Send" color="#AAA9A9"/> */}
          <button className={styles.button}>
            {" "}
            {contacttranslations.formbutton}
          </button>
        </div>
      </form>
      
      </>}

     
    </div>
  );
};

export default Contact;
