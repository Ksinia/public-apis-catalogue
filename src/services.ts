import url from '@/url';

export type Api = {
  API: string;
  Description: string;
  Auth: string;
  [HTTPS: string]: string | boolean;
  Cors: string;
  Link: string;
  Category: string;
};

export type Options = {
  Auth: string[];
  HTTPS: ['all', true, false];
  Cors: string[];
  Category: string[];
};
export type Filters = {
  Auth: string;
  [HTTPS: string]: string | boolean;
  Cors: string;
  Category: string;
};

/**
 * Gets all possible options for a certain properties of all APIs
 */
export function getOptions(apis: Api[]): Options {
  return apis.reduce(
    (acc: Options, api: Api) => {
      if (!acc.Auth.includes(api.Auth)) {
        acc.Auth.push(api.Auth);
      }
      if (!acc.Cors.includes(api.Cors)) {
        acc.Cors.push(api.Cors);
      }
      if (!acc.Category.includes(api.Category)) {
        acc.Category.push(api.Category);
      }
      return acc;
    },
    {
      Auth: ['all'],
      HTTPS: ['all', true, false],
      Cors: ['all'],
      Category: ['all'],
    }
  );
}

/**
 * Filters the APIs according to set filters
 */
export function filterApis(
  apis: Api[],
  filters: Filters,
  sortingAscending: boolean
): Api[] {
  const filtered = apis.filter((api: Api): boolean => {
    if (
      Object.keys(filters).some((f: string) => {
        return filters[f] !== 'all' && filters[f] !== api[f];
      })
    ) {
      return false;
    }
    return true;
  });
  if (sortingAscending) {
    filtered.sort();
  } else {
    filtered.reverse();
  }
  return filtered;
}

export function stringToColour(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

const colors = [
  '#DD4132',
  '#9E1030',
  '#FE840E',
  '#FF6F61',
  '#C62168',
  '#00539C',
  '#E8B5CE',
  '#9B1B30',
  '#77212E',
  '#FA9A85',
  '#CE5B78',
  '#E08119',
  '#2A4B7C',
  '#577284',
  '#42b983',
  '#F96714',
];
