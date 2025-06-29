
export interface GridColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: string;
}
export interface NameModel {
  first_name: string;
  last_name: string;
  handle: string;
}
export interface TeamTagModel {
  value: string;
  text_color: string;
  background_color: string;
}

export interface TransformedGridUser {
  id: string;
  email: string;
  name: NameModel;
  username: string;
  role: string;
  status: string;
  license_used: number;
  teams: TeamTagModel[];
  selected?: boolean;
  image?: string;
}

// 7. Final transformed response shape
export interface TableResponse {
  grid_columns: GridColumn[];
  grid_data: TransformedGridUser[];
}
