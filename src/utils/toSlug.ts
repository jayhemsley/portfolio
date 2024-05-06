export function toSlug(str: string): string {
  const res = str
    .toLowerCase()
    .replace(/[\u00C0-\u00C5]/gi, 'a')
    .replace(/[\u00E0-\u00E5]/gi, 'a')
    .replace(/[\u0100-\u0105]/gi, 'a')
    .replace(/[\u0106-\u010D]/gi, 'c')
    .replace(/[\u010E-\u0111]/gi, 'd')
    .replace(/[\u00C8-\u00CB]/gi, 'e')
    .replace(/[\u00E8-\u00EB]/gi, 'e')
    .replace(/[\u0112-\u011B]/gi, 'e')
    .replace(/[\u011C-\u0123]/gi, 'g')
    .replace(/[\u00CC-\u00CF]/gi, 'i')
    .replace(/[\u00EC-\u00EF]/gi, 'i')
    .replace(/[\u0139-\u0142]/gi, 'l')
    .replace(/[\u00D9-\u00DC]/gi, 'u')
    .replace(/[\u00D1]/gi, 'n')
    .replace(/[\u00F1]/gi, 'n')
    .replace(/[\u0143-\u014B]/gi, 'n')
    .replace(/[\u00D2-\u00D6]/gi, 'o')
    .replace(/[\u014C-\u0151]/gi, 'o')
    .replace(/[\u015A-\u0161]/gi, 's')
    .replace(/[\u0179-\u017E]/gi, 'z')
    .replace(/ - /, ' ')
    .replace(/[^a-z0-9 ]+/gi, '')
    .trim()
    .replace(/ /g, '-')
    .replace(/[-]{2}/g, '')
    .replace(/[^a-z\- ]*/gi, '');

  return res;
}
