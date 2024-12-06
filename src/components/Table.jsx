import fileIcon from "../assets/file-download.svg";

const Table = ({ language }) => {
  const labels = {
    ar: {
      name: "الاسم",
      phone: "رقم الهاتف",
      cv: "السيرة الذاتيه",
      createdDate: "تاريخ الانشاء",
      stages: "المراحل",
      applied: "مقدَّم",
    },
    en: {
      name: "Name",
      phone: "Phone Number",
      cv: "CV",
      createdDate: "Created Date",
      stages: "Stages",
      applied: "Applied",
    },
  };

  const rows = [
    {
      name: "Pristia Candra",
      email: "lincoln@unpixel.com",
      phone: "08092139441",
      cv: "Cv.pdf",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Hanna Baptista",
      email: "hanna@unpixel.com",
      phone: "08092139441",
      cv: "-",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Miracle Geidt",
      email: "miracle@unpixel.com",
      phone: "08092139441",
      cv: "Cv.pdf",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Rayna Torff",
      email: "giana@unpixel.com",
      phone: "08092139441",
      cv: "-",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Giana Lipshutz",
      email: "giana@unpixel.com",
      phone: "08092139441",
      cv: "-",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "James George",
      email: "james@unpixel.com",
      phone: "08092139441",
      cv: "Cv.pdf",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Jordyn George",
      email: "jordyn@unpixel.com",
      phone: "08092139441",
      cv: "Cv.pdf",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
    {
      name: "Skylar Herwitz",
      email: "skylar@unpixel.com",
      phone: "08092139441",
      cv: "Cv.pdf",
      createdDate: "01 Mar 2023",
      stage: labels[language].applied,
    },
  ];

  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col">{labels[language].name}</th>
            <th scope="col">{labels[language].phone}</th>
            <th scope="col">{labels[language].cv}</th>
            <th scope="col">{labels[language].createdDate}</th>
            <th scope="col">{labels[language].stages}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={language === "ar" ? "arabic" : ""}>
              <td>
                {language === "ar" ? row.nameArabic || row.name : row.name}
                <br />
                <span className="email">{row.email}</span>
              </td>
              <td>{row.phone}</td>
              <td>
                {row.cv}{" "}
                {row.cv !== "-" && <img src={fileIcon} alt="Download CV" />}
              </td>
              <td>{row.createdDate}</td>
              <td>{row.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
