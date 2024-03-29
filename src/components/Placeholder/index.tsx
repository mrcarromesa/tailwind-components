import classNames from 'classnames'

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLElement>['className']
}
export const Placeholder = ({ className }: Props) => {
  return (
    <span
      className={classNames(
        'mr-1 inline-block min-h-[1rem] w-full cursor-wait bg-current align-middle opacity-50 motion-safe:animate-placeholderAnimation',
        className
      )}
    />
  )
}
