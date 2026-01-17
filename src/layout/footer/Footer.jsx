import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <section className="footer-section footer-social">
        <a
          className="footer-social-link"
          href="https://instagram.com/guri.arg"
          target="_blank"
        >
          <i className="fa-brands fa-instagram" /> Instagram
        </a>
        <a
          className="footer-social-link"
          href="https://www.facebook.com/profile.php?id=100067053930553"
          target="_blank"
        >
          <i className="fa-brands fa-facebook-square" /> Facebook
        </a>
        <a
          className="footer-social-link"
          href="https://api.whatsapp.com/message/7FM5IID6AOEPD1?autoload=1&app_absent=0"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp" /> Whatsapp
        </a>
      </section>
      <section className="footer-section footer-brand">
        <img
          src="/assets/images/logo_guri_footer.png"
          className="footer-logo"
          alt="logo footer guri"
        />
      </section>
      <section className="footer-section footer-contact">
        <label className="newsletter">¡Suscribite a nuestras novedades!</label>
        <div className="suscribe">
          <input className="email" type="email" />
          <button className="btn-newsletter" type="submit">
            <i className="fa-regular fa-paper-plane fa-xl" />
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer
