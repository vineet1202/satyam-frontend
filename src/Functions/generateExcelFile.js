import { utils, writeFile } from "xlsx/xlsx.mjs";

// headings - string[]
// jsonData - array of objects
const generateExcel = (jsonData, headings) => {
  const jsonDataFormatted = jsonData.reduce((acc, entry) => {
    const entryFormatted = headings.reduce(
      (accEntry, heading) => ({ [`${heading}`]: entry[heading], ...accEntry }),
      {}
    );
    return [entryFormatted, ...acc];
  }, []);

  console.log(jsonDataFormatted);

  const worksheet = utils.json_to_sheet(jsonDataFormatted);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Users");
  writeFile(workbook, "satyam-users.xlsx");
};

export default generateExcel;
