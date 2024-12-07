/*
 * @param {string[]} array1 - The first array.
 * @param {string[]} array2 - The second array.
 * @returns {Object} - An object containing additions and removals.
 */
export default function diffArrays(order, data) {
   const input = data.map(a => a[0])
   
    const set1 = new Set(order);
    const set2 = new Set(input);

    const additions = input.filter(item => !set1.has(item));
    const removals = order.filter(item => !set2.has(item));

    return { additions, removals };
}
