export const categories = {
  hardware: { label: 'Hardware', id: '/01' },
  software: { label: 'Software', id: '/02' },
  infrastructure: { label: 'Infrastructure', id: '/03' },
  cybersecurity: { label: 'Cybersecurity', id: '/04' },
} as const;

export type CategoryKey = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as CategoryKey[];
