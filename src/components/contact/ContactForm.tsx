import styles from "./styles.module.css";

export default function ContactForm() {
    return (
      <>
        <form
          action="https://formspree.io/f/xjvndwdq"
          method="POST"
          className={styles.contact_form}
        >
          <div className="form-group">
            <div>
              <label className={styles.form_label}>Your name</label>
            </div>
            <div className={styles.input_container}>
              <input
                type="text"
                className={styles.small_input}
                name="name"
                id="name"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label className={styles.form_label}>Your company</label>
            </div>
            <div className={styles.input_container}>
              <input className={styles.small_input} name="company" id="company" />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label className={styles.form_label}>Your email</label>
            </div>
            <div className={styles.input_container}>
              <input
                type="text"
                className={styles.small_input}
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label className={styles.form_label}>Your phone number</label>
            </div>
            <div className={styles.input_container}>
              <input
                type="text"
                className={styles.small_input}
                name="phone-number"
                id="phone-number"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label className={styles.form_label}>Your message to us</label>
            </div>
            <div>
              <textarea
                className={styles.large_input}
                name="message"
                id="message"
              ></textarea>
            </div>
          </div>
          <div>
          <div className={"flex-full-centered" + " "+ styles.send_button_container}>
            <input type="submit" value="SEND" className={"link-to-button" + " " + styles.send_button} />
          </div>
          </div>
        </form>
      </>
    );
  }