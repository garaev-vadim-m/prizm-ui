/**
 * @author Garaev.VM
 * @components ElNotificaton
 */
import { ElNotification, type NotificationInstance } from 'element-plus';
import 'element-plus/es/components/notification/style/css';
import classes from './PrizmNotification.module.scss';

type ElNotificationProps = NotificationInstance;

export type BaseNotificationProps = {
  title?: string;
  message?: string;
  type: Extract<ElNotificationProps['type'], 'success' | 'warning' | 'error' | 'info'>;
  position?: Extract<ElNotificationProps['position'], 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>;
  duration?: ElNotificationProps['duration'];
};

const classLookup: Record<BaseNotificationProps['type'], string> = {
  success: classes.baseNotification_success,
  warning: classes.baseNotification_warning,
  error: classes.baseNotification_error,
  info: classes.baseNotification_info,
};

// типы уже описывают возможные варианты, также есть документация которая остается полностью валидной, поэтому примеры можно спокойно убрать

export const PrizmNotification = ({
  type,
  position = 'top-right',
  duration = 1000,
  message = '',
  title = '',
}: BaseNotificationProps) => {
  return ElNotification[type]({
    customClass: classLookup[type],
    title,
    message,
    position,
    duration,
  });
};

PrizmNotification.inheritAttrs = false;
