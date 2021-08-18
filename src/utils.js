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

const re = new RegExp(/([бБвВгГдДжЖзЗкКлЛмМнНпПрРсСтТфФхХцЦчЧшщЩ][аАяЯоОёЁуУюЮыЫиИэЭеЕьъ]|[А-Яа-яёЁ])/, 'g');

export function transformText(text) {
  return text
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