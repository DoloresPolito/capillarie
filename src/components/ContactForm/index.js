"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
const Contact = ({ contacttranslations }) => {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;
  const { register, handleSubmit } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    sendEmail(data);
    setMessageSent(true);
  }

  return (
    <div className={styles.formcontainer}>
      {messageSent ? (
        <>
          <div className={styles.messagesent}>
            <h3>
              Thank you very much for your message, we will contact you shortly.
            </h3>
          </div>
        </>
      ) : (
        <>
          <h4>{contacttranslations.message}</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder={locale === "es" ? "Nombre Completo" : "Full Name"}
                className={styles.input}
                {...register("name", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.input}
                {...register("email", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="tel"
                placeholder={
                  locale === "es" ? "Número de teléfono" : "Phone number"
                }
                className={styles.input}
                {...register("phone", { required: true })}
              />
            </div>
            <div className={styles.inputcontainertextarea}>
              <textarea
                placeholder={locale === "es" ? "Mensaje" : "Message"}
                className={`${styles.input} ${styles.textarea}`}
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className={styles.buttoncontainer}>
              {/* <Button text="Send" color="#AAA9A9"/> */}
              <button className={styles.button}>
                {" "}
                <p>{locale === "es" ? "Enviar" : "Send"}</p>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
