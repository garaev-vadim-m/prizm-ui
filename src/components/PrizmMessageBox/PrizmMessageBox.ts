import { ElMessageBox, type ElMessageBoxOptions, type MessageBoxData, type MessageBoxType } from 'element-plus';
import 'element-plus/es/components/message-box/style/css';
import classes from './PrizmMessageBox.module.scss';

export type Props = Pick<
  ElMessageBoxOptions,
  | 'title'
  | 'message'
  | 'showCancelButton'
  | 'showConfirmButton'
  | 'center'
  | 'customClass'
  | 'confirmButtonClass'
  | 'cancelButtonClass'
  | 'buttonSize'
  | 'customStyle'
> & {
  /** 'primary' refers to the confirm styles from Figma. 'danger' refers to the delete styles from Figma. @default 'primary' */
  variant?: 'primary' | 'danger';
  /** @default 'confirm' */
  boxType?: Extract<MessageBoxType, 'confirm'>;
  cancelButtonText?: string;
  confirmButtonText?: string;
  classLocalComponent?: string;
  vertical?: boolean;
  width?: `${string}px` | `${string}%` | string | number;
};

function handleWidth(width: number | string | undefined): string {
  if (width === undefined) return `100%`;
  if (typeof width === 'number') width = String(width);
  if (!width.length) return `100%`;
  if (width.indexOf('px')) return `${width}px`;
  if (width.indexOf('%')) return `${width}%`;
  return `${width}px`;
}

export const PrizmMessageBox = ({
  showCancelButton = true,
  showConfirmButton = true,
  center = false,
  variant = 'primary',
  boxType = 'confirm',
  vertical = false,
  ...props
}: Props): Promise<MessageBoxData> => {
  const handleStyle = {
    width: handleWidth(props.width),
  };
  return ElMessageBox({
    customClass: [
      classes.baseMessageBox,
      props.classLocalComponent,
      classes[variant],
      vertical ? classes.vertical : '',
    ].join(' '),
    customStyle: handleStyle,
    boxType,
    showCancelButton,
    cancelButtonClass: classes.buttonCancel,
    confirmButtonClass: classes.buttonConfirm,
    showConfirmButton,
    center,
    ...props,
  });
};

PrizmMessageBox.inheritAttrs = false;
