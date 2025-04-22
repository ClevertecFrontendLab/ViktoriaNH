// export const createSlug = (text: string): string => {
//     const translitMap: Record<string, string> = {
//         а: 'a',
//         б: 'b',
//         в: 'v',
//         г: 'g',
//         д: 'd',
//         е: 'e',
//         ё: 'e',
//         ж: 'zh',
//         з: 'z',
//         и: 'i',
//         й: 'y',
//         к: 'k',
//         л: 'l',
//         м: 'm',
//         н: 'n',
//         о: 'o',
//         п: 'p',
//         р: 'r',
//         с: 's',
//         т: 't',
//         у: 'u',
//         ф: 'f',
//         х: 'h',
//         ц: 'ts',
//         ч: 'ch',
//         ш: 'sh',
//         щ: 'shch',
//         ы: 'y',
//         э: 'e',
//         ю: 'yu',
//         я: 'ya',
//     };

//     let result = '';
//     let lastCharWasDash = false;

//     for (const i of text.toLowerCase().trim()) {
//         if (i === ' ' || i === '_') {
//             if (!lastCharWasDash) {
//                 result += '-';
//                 lastCharWasDash = true;
//             }
//         } else {
//             const translitChar = translitMap[i];
//             if (translitChar) {
//                 result += translitChar;
//                 lastCharWasDash = false;
//             } else if (/[a-z0-9]/i.test(i)) {
//                 result += i;
//                 lastCharWasDash = false;
//             }
//         }
//     }

//     return result;
// };
