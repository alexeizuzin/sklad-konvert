import Eyo from 'eyo-kernel';

const alphabetPhonemes = {
  а: 'a',
  б: '',
  в: '',
  г: '',
  д: '',
  е: 'е',
  ё: 'ё',
  ж: '',
  з: '',
  и: 'и',
  й: '',
  к: '',
  л: '',
  м: '',
  н: '',
  о: 'o',
  п: '',
  р: '',
  с: '',
  т: '',
  у: 'у',
  ф: '',
  х: '',
  ц: '',
  ч: '',
  ш: '',
  щ: '',
  ь: '',
  ъ: '',
  э: 'э',
  ю: 'ю',
  я: 'я',
  бе: 'беэ',
  пе: 'пее',
  по: '',
  ре: 'рьэ',
  ки: 'кии',
  ко: '',
  ло: 'лоо',
  ме: 'меэ',
  му: 'moon',
  ту: 'туу',
  не: 'ньэ',
};

const safeEyo = new Eyo();
let dictLoaded = false;

loadDict('./safe.txt', safeEyo);

const re = new RegExp(/([бБвВгГдДжЖзЗкКлЛмМнНпПрРсСтТфФхХцЦчЧшщЩ][аАяЯоОёЁуУюЮыЫиИэЭеЕьъ]|[А-Яа-яёЁ])/, 'g');

function loadDict(path, dict) {
  const req = new XMLHttpRequest();
  req.responseType = 'text';
  req.addEventListener('load', () => {
      dict.dictionary.set(req.responseText);
      dictLoaded = true;
  });
  
  req.open('GET', path, true);
  req.send();    
}

export function transformText(text) {
  const linted = dictLoaded ? safeEyo.lint(text) : [];
  //console.log(' --> ', safeEyo.lint(text));
  const lintedText = linted.reduce((acc, item) => {
    return acc.replace(item.before, item.after);
  }, text);
  return lintedText
    .replace(/(\w+|[А-Яа-яёЁ]+)/g, '<span>$1</span>')
    .replace(re, '<i data-content="$1">$1</i>')
    .replace(/\n/g, '<br/>')
    .replace(/(> )/g, '><em>  </em>')
    .replace(/<\/i><i/g, '</i><b>·</b><i')
    .replace(/(\.|,|:|\?|!)/g, '<a>$1</a><em>  </em>');
}

export function checkText(sklad) {
  const filtered = alphabetPhonemes[sklad.toLowerCase()];
  if (sklad.includes('ь') || sklad.includes('ъ')) {
    return '';
  }

  return filtered !== undefined ? filtered : sklad;
}