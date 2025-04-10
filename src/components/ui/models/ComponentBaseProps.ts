export interface ComponentBaseProps {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void | ((item: any) => void);
  inputRef?: any;
  style?: React.CSSProperties;
}
