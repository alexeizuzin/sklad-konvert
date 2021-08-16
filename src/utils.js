const re = new RegExp(/([бБвВгГдДжЖзЗкКлЛмМнНпПрРсСтТфФхХцЦчЧшщЩ][аАяЯоОёЁуУюЮыЫиИэЭеЕьъ]|[А-Яа-яёЁ])/, 'g');

export function transformText(text) {
  return text
    .replace(/(\w+|[А-Яа-яёЁ]+)/g, '<span>$1</span>')
    .replace(re, '<i>$1</i>')
    .replace(/\n/g, '<br/>')
    .replace(/( )/g, '<em>  </em>')
    .replace(/<\/i><i>/g, '</i><b>·</b><i>')
    .replace(/(\.|,|:|\?|!)/g, '<a>$1</a>');
}