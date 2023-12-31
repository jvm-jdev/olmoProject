import { VideoImage2 } from "../../VideoContent";

const Demo2content3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Security, Simplicity, Easiness</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg">Advanced Performance Made Easy</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit at vitae ipsum primis
                    undo and cubilia laoreet augue and luctus magna dolor luctus
                    at egestas sapien vitae nemo egestas volute and turpis
                    dolores aliquam quaerat sodales a sapien
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Creative Alternative Solutions</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris auctor euismod an iaculis
                        luctus magna purus pretium ligula purus and quaerat
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>
                {/* END TEXT BOX */}
              </div>
            </div>
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div className="img-block left-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-08.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column video-preview wow fadeInRight">
                <VideoImage2 id="SZEflIVnhH8" />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Handling With Ease
                </span>
                {/* Title */}
                <h2 className="h2-xs">Work smarter with powerful features</h2>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit purus a purus ipsum
                  primis in cubilia laoreet augue luctus magna dolor luctus and
                  egestas sapien egestas vitae nemo volute
                </p>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas
                </p>
                {/* CONTENT BOX #1 */}
                <div className="cbox-2 mt-20">
                  {/* Icon */}
                  <div className="cbox-2-ico">
                    <div className="ico-40 shape-ico violet-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-smartphone-1" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="h5-xs">Easy Integration</h5>
                    <p className="p-md">Multi-Device Syncing</p>
                  </div>
                </div>
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END BOTTOM ROW */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2content3;
