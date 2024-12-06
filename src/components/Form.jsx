import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ language }) => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form ">
      <h1>{language == "en" ? "New Pay Cycle" : "دورة الدفع الجديدة"}</h1>
      <form onSubmit={handleSumbit}>
        <label
          className={language === "ar" ? "arabic-text" : ""}
          htmlFor="name"
        >
          {language == "ar" ? "الاسم" : "Name"}
          <span className="required">*</span>
        </label>

        <input
          className={language === "ar" ? "arabic-text" : ""}
          type="text"
          id="name"
          name="name"
          placeholder={language === "ar" ? "اكتب اسمك" : "write your name"}
        />

        <label htmlFor="Description">
          {language === "ar" ? "الوصف" : " Description"}
          <span className="required">*</span>
        </label>

        <input
          className={language === "ar" ? "arabic-text" : ""}
          type="text"
          id="Description"
          name="Description"
          placeholder={language === "ar" ? " الوصف" : "description"}
        />

        <div className="">
          <select
            className={language === "ar" ? "dropdown arabic-text" : "dropdown"}
          >
            <option value="monthly">
              {language === "ar" ? "شهريا" : "Monthly"}
            </option>
            <option value="yearly">
              {" "}
              {language === "ar" ? "سنويا" : "Yearly"}
            </option>
            <option value="weekly">
              {" "}
              {language === "ar" ? "يوميا" : "daily"}
            </option>
          </select>
        </div>

        <label htmlFor="cut-off-date">
          {language === "ar" ? "تاريخ القطع" : "Cut-off date"}
          <span className="required">*</span>
        </label>

        <input
          id="cut-off-date"
          name="date"
          placeholder={language === "ar" ? "اختر تاريخ" : "Select a date"}
          className={language === "ar" ? "arabic-text" : ""}
        />
        <div className="btn-container">
          <button className="form-btn">
            {language === "ar" ? "حفظ" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
