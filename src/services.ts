export type Api = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

type Options = {
  Auth: string[];
  HTTPS: ['all', true, false];
  Cors: string[];
  Category: string[];
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
  filters: {
    Auth: string;
    HTTPS: string | boolean;
    Cors: string;
    Category: string;
  },
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
