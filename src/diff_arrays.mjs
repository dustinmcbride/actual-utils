/*
 * @param {string[]} array1 - The first array.
 * @param {string[]} array2 - The second array.
 * @returns {Object} - An object containing additions and removals.
 */
export default function diffArrays(order, data) {

   const input = data.map(a => a[0])
   const cleanedOrder = order.filter(r => r != '')
   
    const set1 = new Set(cleanedOrder);
    const set2 = new Set(input);

    const additions = input.filter(item => !set1.has(item));
    const removals = cleanedOrder.filter(item => !set2.has(item));


    if (additions.length) {
        console.log('\n⚠️ Additions (in `input` but not in `order`):')
        console.log(additions);
    }
    
    if (removals.length) {
        console.log('\n⚠️  Removals (in `order` but not in `input`):')
        console.log(removals);
    }

    const hasDiff = additions.length || removals.length 

    return { additions, removals, hasDiff };
}
