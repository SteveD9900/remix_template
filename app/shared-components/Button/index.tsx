import MuiButton, { ButtonProps as MuiButtonPros } from '@mui/material/Button';
import clsx from 'clsx';
import './Button.scss';

export type ButtonVariant = | 'primary' | 'secondary' | 'danger' | 'danger--filled' | 'elevated' | 'text' | 'chip-assist' | 'hyperlink' | 'link';

export type ButtonProps = Omit<MuiButtonPros, 'variant'> & {
  variant?: ButtonVariant;
};

const Button = ({
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const buttonClass = 'normal-button';
  return (
    <MuiButton className={clsx(`${buttonClass}`, variant)} fullWidth={fullWidth} {...props} />
  );
};

export default Button;