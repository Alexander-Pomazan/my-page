export const isPhoneOrEmail = (url) =>
  url.startsWith('tel:') || url.startsWith('mailto:')
