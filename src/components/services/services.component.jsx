import "./services.styles.scss";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Design</div>
              <p>
                Create engaging, interactive HTML5-based designs and motion
                graphics that can run on any device.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Enhancement</div>
              <p>
                Creating tools that improve site interaction regardless of the
                browser.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Testing</div>
              <p>Fixing bugs and testing for usability..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
