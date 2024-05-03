import smartquotes from 'smartquotes-ts';

import { cn } from '@/utils';

export type ButtonProps = {
  label: string;
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  label, className, icon, ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex select-none items-center rounded-full bg-secondary px-5 py-3 text-center align-middle font-light text-secondary-lightest shadow-primary-dark transition-all will-change-transform translate-y-0 hover:bg-primary hover:shadow-xl hover:-translate-y-1 active:bg-primary-darker active:shadow-lg active:scale-95',
        className,
      )}
      {...props}>
      {smartquotes(label)}
      {icon && <span className="mr-4 flex h-5 w-5 items-center">{icon}</span>}
    </button>
  );
}
