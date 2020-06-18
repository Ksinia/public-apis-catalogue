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
  HTTPS: ["all", true, false];
  Cors: string[];
  Category: string[];
};

export const getOptions = (apis: Api[]): Options => {
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
      Auth: ["all"],
      HTTPS: ["all", true, false],
      Cors: ["all"],
      Category: ["all"],
    }
  );
};

export const filterApis = (
  apis: Api[],
  filters: {
    Auth: string;
    HTTPS: string | boolean;
    Cors: string;
    Category: string;
  }
): Api[] => {
  return apis
    .filter((api: Api): boolean => {
      if (filters.Auth === "all") {
        return true;
      } else {
        return api.Auth === filters.Auth;
      }
    })
    .filter((api: Api): boolean => {
      if (filters.HTTPS === "all") {
        return true;
      } else {
        return api.HTTPS.toString() === filters.HTTPS.toString();
      }
    })
    .filter((api: Api): boolean => {
      if (filters.Cors === "all") {
        return true;
      } else {
        return api.Cors === filters.Cors;
      }
    })
    .filter((api: Api): boolean => {
      if (filters.Category === "all") {
        return true;
      } else {
        return api.Category === filters.Category;
      }
    });
};
