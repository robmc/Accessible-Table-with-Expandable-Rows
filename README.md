# Accessible-Table-with-Expandable-Rows

This is a placeholder for testing. This structure is a basic table with 1 cell per row to expand the row and show additional information. This is used for testing with different markup but is not currently accessible.

Notes:
When interacting with a table with expandable rows (Ex: Transaction history that shows expenditures with dates, businesses, amounts, etc.), the content within the expandable rows are generally not related to the table structure. For example, if activating the cell to display additional information such as business hours or location, this information is not related to the table. The [aria-level](https://www.w3.org/TR/wai-aria/states_and_properties#aria-level) role can be used with [role="grid"](https://www.w3.org/TR/wai-aria/roles#grid) however it can be argued that the additional information is not related to the grid/table information if it is supplemental. For this reason, a labelled [region](https://www.w3.org/TR/wai-aria/roles#region) can be used or it can be treated as a non-modal [dialog](https://www.w3.org/TR/wai-aria/roles#dialog) that is properly labeled. 
