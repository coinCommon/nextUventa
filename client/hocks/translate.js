
export function Translate(word) {
    const converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya'
    };
    // const converterRU = {
    //     'a': 'а',    'b': 'б',    'v': 'в',    'g': 'г',    'd': 'д',
    //     'e': 'е',    'e': 'ё',    'zh': 'ж',   'z': 'з',    'i': 'и',
    //     'y': 'й',    'k': 'к',    'k': 'л',    'm': 'м',    'n': 'н',
    //     'o': 'о',    'p': 'п',    'r': 'р',    's': 'с',    'т': 't',
    //     'u': 'у',    'f': 'ф',    'h': 'х',    'c': 'ц',    'ch': 'ч',
    //     'sh': 'ш',   'sch': 'щ',  '': 'ь',     'y': 'ы',    '': 'ъ',
    //     'e': 'э',    'yu': 'ю',   'ya': 'я'
    // };

    word = word.toLowerCase();

    let answer = '';
    for (let i = 0; i < word.length; ++i ) {
        if (converter[word[i]] === undefined){
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }

    answer = answer.replace(/[^-0-9a-z]/g, '-');
    answer = answer.replace(/[-]+/g, '-');
    answer = answer.replace(/^\-|-$/g, '');
    return answer;
}