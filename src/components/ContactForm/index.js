"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";
import Button from "../Button";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    sendEmail(data);
  }

  return (
    <div className={styles.formcontainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputcontainer}>
    
          <input
            type="text"
            placeholder="Full Name"
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
     
          <textarea
            rows={4}
            placeholder="Message"
            className={styles.input}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className={styles.buttoncontainer}>
          <Button text="send" color="#AAA9A9"/>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
