export const categories = {
  category1: { label: 'Test Category 1', id: '/01' },
  category2: { label: 'Test Category 2', id: '/02' },
  category3: { label: 'Test Category 3', id: '/03' },
  category4: { label: 'Test Category 4', id: '/04' },
} as const;

export type CategoryKey = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as CategoryKey[];
