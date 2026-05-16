export const categories = {
  hardware: { label: 'Test Category 1', id: '/01' },
  infra:    { label: 'Test Category 2', id: '/02' },
  software: { label: 'Test Category 3', id: '/03' },
  security: { label: 'Test Category 4', id: '/04' },
} as const;

export type CategoryKey = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as CategoryKey[];
