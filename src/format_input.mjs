
/* 

Input
[
  'Category',
  'Deposits',
  'Payments',
  'Totals',
  'Average',
  'Bills',
  '0.00',
  '-5,041.76',
  '-5,041.76',
  '-2,520.88',
]

Output
  [
    [ 'Category', 'Deposits', 'Payments', 'Totals', 'Average' ],
    [ 'Bills', '0.00', '-5041.76', '-5041.76', '-2520.88' ]
  ]
*/

const NEW_ROW_AFTER = 5

export default function textToCsv(array) {
    const entries = array.filter(entry => entry.trim() !== '');

    const rows = [];
    for (let i = 0; i < entries.length; i += NEW_ROW_AFTER) {
      rows.push(entries.slice(i, i + NEW_ROW_AFTER).map(value => value.replace(/,/g, '')));
    }
  return rows
}
