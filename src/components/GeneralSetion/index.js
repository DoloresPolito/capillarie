import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
import AnimatedDiv from "../AnimatedDiv";
import Link from "next/link";
export default function GeneralSection() {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>
        {locale === "es" ? (
          <>
            <AnimatedDiv>
              <h2>
                Siente la tranquilidad de saber que tu cabello está en{" "}
                <span>las mejores manos.</span>
              </h2>

              <h5>
                Programe su consulta con Capillarie hoy y comience su camino
                hacia una restauración capilar excepcional
              </h5>
            </AnimatedDiv>
          </>
        ) : (
          <>
            <AnimatedDiv>
              <h2>
                Leave our clinic with a <span>smile,</span> knowing your hair is
                in the<span> best hands.</span>
              </h2>

              <h5>
                Schedule your consultation with Capillarie today and begin your
                path to exceptional hair re storation!
              </h5>
            </AnimatedDiv>
          </>
        )}

        <div className={styles.buttoncontainer}>
        <Link
              href="https://wa.me/353830220395"
              whatsapp
              target="_blank"
              style={{ textDecoration: "none", color: "#493e36" }}
            >
          <Rounded>
            {locale === "es" ? "Reserva una cita" : "Book an appoiment"}
          </Rounded>
          </Link>
        </div>
      </div>
    </div>
  );
}
