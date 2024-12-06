const Data = ({ language }) => {
  return (
    <section
      className={
        language === "ar"
          ? "container-p data-container main arabic "
          : "container-p data-container main"
      }
    >
      <div className={language === "ar" ? "data arabic-text " : "data"}>
        <p>{language === "ar" ? "مشاهدات" : "views"}</p>
        <h1>{language === "ar" ? "٧,٢٦٥" : "7,265"}</h1>
      </div>
      <div className={language === "ar" ? "data arabic-text " : "data"}>
        <p>{language === "ar" ? "زيارات" : "visits"}</p>
        <h1>{language === "ar" ? "٣,٦٧١" : "3,671"}</h1>
      </div>
      <div className={language === "ar" ? "data arabic-text " : "data"}>
        <p>{language === "ar" ? "المستخدمون الجدد" : "views"}</p>
        <h1>{language === "ar" ? "١٥٦" : "156"}</h1>
      </div>
      <div className={language === "ar" ? "data arabic-text " : "data"}>
        <p>{language === "ar" ? "المستخدمين النشطين" : "Active users"}</p>
        <h1>{language === "ar" ? "٢,٣١٨" : "2,318"}</h1>
      </div>
    </section>
  );
};

export default Data;
