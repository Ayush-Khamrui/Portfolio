import "./Footer.scss";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">
            © 2021. Designed by Ayush Khamrui. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
