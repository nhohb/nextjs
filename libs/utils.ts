export function formatPrice(price: number) {
  return price / 100;
}

export function formatString(value: string, variables: any) {
  if (!value) {
    return '';
  }

  return value.replace(/(\{\w+\})/g, (match: any) => {
    const m: string = match.replace(/\{|\}/g, '');
    return variables[m] || '';
  });
}
