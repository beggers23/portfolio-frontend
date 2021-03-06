/**
 * Function to generate array of unique elements used for filtering
 *
 * @param {[object]} aggregates the total objects that will generate filters
 * @param {string} filterOriginKey the key used to get the array data required for filtering
 */
export const generateFiltersArray = (aggregates, filterOriginKey) => {
  // This will logic will create an array of filter strings with no duplicates
  return [
    // the new Set removes any duplicates from the flatMapped Array
    ...new Set(
      // flatMap will take an array of arrays and make it an array of <type>
      aggregates.flatMap((item) => {
        return [...item[filterOriginKey]];
      })
    ),
  ];
};

/**
 * Array of desired filters to display based on key value passed in
 * @param {*} keyType
 */
export const getFiltersArray = (keyType) => {
  switch (keyType) {
    case "primary_technologies":
      return [
        "All Projects",
        "React",
        "Redux",
        "React Testing Library",
        "Material UI",
        "Angular",
        "Vue",
      ];
    default:
      break;
  }
};
