import { VideoImage } from "../../VideoContent";

const Demo3content10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 pb-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Section ID */}
              <span className="section-id txt-upcase">
                Your road to success
              </span>
              {/* Title */}
              <h2 className="h2-xs">
                Marketing solutions that fuel your business growth
              </h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview">
              <VideoImage
                id="SZEflIVnhH8"
                img="images/seo-07.png"
                extraClass="video-btn video-btn-xl bg-green ico-90"
              />
            </div>
          </div>
        </div>
        {/* ADVANTAGES LIST */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
              <ul className="advantages mt-25 clearfix">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3content10;
