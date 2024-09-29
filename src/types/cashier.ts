export interface CategoryType {
  title: string;
  icon?: string;
  onClick?: () => void;
  active?: boolean;
  category?: string;
  price?: number;
  stock?: number;
  onSave?: (count: number) => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
  count?: number;
  onChange?: (count: number) => void;
}

export interface CurrentSelection {
  category?: any;
  type?: any;
  color?: any;
  size?: any;
}
