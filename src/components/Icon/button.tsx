import { useViewerQuery } from '~/graphql/typeSlut'
import { cx } from '~/lib/transformers'

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element

export interface IconButtonProps {
  Icon: HeroIcon
  children?: React.ReactNode
  color: string
  hoverbg?: string
  isActive?: boolean
  onClick: () => void
}

export const IconButton = (props: IconButtonProps) => {
  const { data } = useViewerQuery()

  const { Icon, isActive, color, children, hoverbg } = props

  return (
    <button
      className={cx(
        'flex items-center rounded bg-none p-1 focus:outline-purple-400',
        color,
        hoverbg,
        isActive && 'bg-slate-200',
        data.viewer ? 'cursor-pointer hover:bg-purple-50' : 'cursor-default'
      )}
      {...props}>
      <Icon
        className={cx(
          'h-4 w-4',
          !isActive && color,
          isActive && 'text-black',
          children?.toString() && 'mr-1'
        )}
      />
      <span className="text-sm">{children}</span>
    </button>
  )
}
