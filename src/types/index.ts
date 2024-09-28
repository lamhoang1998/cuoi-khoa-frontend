export interface JiraItem {
  id: string;
  key: string;
  fields: {
    summary: string;
    description: string;
  };
}

export interface JiraItemData {
  summary: string;
  description: string;
}

export type Task = JiraItem;
export type Bug = JiraItem;
