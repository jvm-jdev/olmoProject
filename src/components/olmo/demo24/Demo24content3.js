import Counter from "../../Counter";

const Demo24content3 = () => {
  return (
    <section
      id="content-3"
      className="bg-snow content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-09.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id txt-upcase">محسن تمامًا</span>
                {/* Title */}
                <h2 className="h2-xs">اعمل بذكاء مع ميزات قوية</h2>
                {/* Text */}
                <p className="p-lg">
                  العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم
                  لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال في
                  أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج
                  البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم
                  إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض
                  العبارات الفكاهية إليها.
                </p>
                {/* Text */}
                <p className="p-lg">
                  لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                  المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
                  إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                </p>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block slim-column left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg">الأداء المتقدم أصبح سهلاً</h5>
                  {/* Text */}
                  <p className="p-lg">
                    العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب
                    تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت
                    بإدخال في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد
                    في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص
                    لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال
                    بعض العبارات الفكاهية إليها.
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">الحل البرمجي الكامل</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم،
                        ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر
                        أو الكلمات العشوائية إلى النص.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم،
                        ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر
                        أو الكلمات العشوائية إلى النص.
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* CB WRAPPER */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="cb-wrapper">
                {/* CB HOLDER */}
                <div className="cb-holder wow fadeInLeft">
                  {/* CB BOX #1 */}
                  <div className="cb-single-box">
                    <p className="p-lg cb-header">زبائن الجدد</p>
                    <h2 className="h2-title-xs statistic-number">
                      <sup>+</sup>
                      {/* <Counter end={784} /> */}
                      <Counter end={784} />
                    </h2>
                    <p className="p-md mt-5 ico-10">
                      <span className="green-color">
                        <span className="flaticon-" /> 4.6%
                      </span>{" "}
                      مقابل آخر 7 أيام
                    </p>
                  </div>
                  <hr className="divider" />
                  {/* CB BOX #2 */}
                  <div className="cb-single-box">
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-md">
                          وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على
                          الإنترنت.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                          وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على
                          الإنترنت.
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* CB BOX #3 */}
                  <div className="cb-single-box cb-box-rounded bg-green white-color mt-25">
                    <h4 className="h4-lg">98.245</h4>
                    <p className="p-lg">بعض الأمثلة النصية</p>
                  </div>
                </div>{" "}
                {/* END CB HOLDER */}
                {/* CB SHAPE */}
                <div className="cb-shape-1">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-1.png"
                    alt="content-image"
                  />
                </div>
                {/* CB SHAPE */}
                <div className="cb-shape-2">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-2.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* END CB WRAPPER */}
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo24content3;
