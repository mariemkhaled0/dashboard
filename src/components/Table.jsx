import fileIcon from "../assets/file-download.svg";

const Table = ({ language }) => {
  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr className={language == "ar" ? "arabic " : ""}>
            <th>{language === "ar" ? "الاسم" : "Name"}</th>
            <th>{language == "ar" ? "رقم الهاتف" : "Phone Number"}</th>
            <th>{language == "ar" ? "السيرة الذاتيه" : "cv"}</th>
            <th>{language == "ar" ? "تاريخ الانشاء " : "Created date"}</th>
            <th>{language == "ar" ? " المراحل" : "Stages"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language === "ar" ? "باريستا كندرا" : "Pristia Candra"}
              <br />
              <span>lincoln@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>
              Cv.pdf <img src={fileIcon} />
            </td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? " هانا بابيستا  " : "Hanna Baptista"}
              <br />
              <span>hanna@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>-</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? " هانا بابيستا  " : "Miracle Geidt"}
              <br />
              <span>miracle@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>
              Cv.pdf <img src={fileIcon} />
            </td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic " : ""}>
            <td>
              {language == "ar" ? "  ريانا تروف  " : "Rayna Torff "}
              <br />
              <span>giana@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>-</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? " باريستا كندرا  " : "Giana Lipshutz"}
              <br />
              <span>giana@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>-</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? "  جيمس جورج  " : "James George"}
              <br />
              <span>james@unpixel.com</span>
            </td>

            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>Cv.pdf</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? " باريستا كندرا  " : "Jordyn George "}
              <br />
              <span>jordyn@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>Cv.pdf</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
          <tr className={language === "ar" ? "arabic  " : ""}>
            <td>
              {language == "ar" ? " باريستا كندرا  " : " Skylar Herwitz"}
              <br />
              <span>skylar@unpixel.com</span>
            </td>
            <td>{language == "ar" ? "  ٠٨٠٩٢١٣٩٤٤١  " : "08092139441 "}</td>
            <td>Cv.pdf</td>
            <td>{language == "ar" ? "  ٠١ مارس ٢٠٢٣.  " : "01 Mar 2023 "}</td>
            <td>{language == "ar" ? "مقدَّم" : "Applied "}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
