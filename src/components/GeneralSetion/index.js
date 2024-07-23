import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";
import { useTranslation } from "react-i18next";
export default function GeneralSection() {
  const { t, i18n } = useTranslation("");
  const locale = i18n.language;

  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>
        {locale === "es" ? (
          <>
            <h2>
              Siente la tranquilidad de saber que tu cabello está en{" "}
              <span>las mejores manos.</span>
            </h2>

            <h5>
              Programe su consulta gratuita con Capillarie hoy y comience su
              camino hacia una restauración capilar excepcional
            </h5>
          </>
        ) : (
          <>
            <h2>
              Leave our clinic with a <span>smile,</span> knowing your hair is
              in the<span> best hands.</span>
            </h2>
            <h5>
              Schedule your free consultation with Capillarie today and begin
              your path to exceptional hair re storation!
            </h5>
          </>
        )}

        <div className={styles.buttoncontainer}>
          <Rounded>
            {locale === "es" ? "Reserva una cita" : "Book an appoiment"}
          </Rounded>
        </div>
      </div>
    </div>
  );
}
