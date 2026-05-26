//# Utils //
import FilterClasses from '../../shared/utils/FilterClasses'
//# Classes //
import './text.scss'

interface textProps {
    /** HTML 'tag' for text */
    tag: keyof React.JSX.IntrinsicElements
    /** additional CSS classes to apply */
    className?: string
    /** children of the link */
    children?: React.ReactNode
    /** makes the text unselectable */
    no_select?: boolean
    /** 
      * Prevents the text from exceeding parent's width
      * If the content overflows horizontally, it will be truncated and display an ellipsis ("...")
    */
    not_exceed_X?: boolean
    /**
      * Prevents the text from exceeding the parent's height
      * If it overflows vertically, a scrollbar is displayed to allow scrolling
    */
    not_exceed_Y?: boolean
}

export default function Text({ tag, className, children, no_select, not_exceed_X, not_exceed_Y }: textProps) {
    const TxtTag: keyof React.JSX.IntrinsicElements = tag

    const frmtd_className: string = FilterClasses(`
                text 
                ${className || ''}
                ${no_select ? 'text-no-select' : ''}
                ${not_exceed_X ? 'text-not-exceed-x' : ''}
                ${not_exceed_Y ? 'text-not-exceed-y' : ''}
                `)
    return (
        <>
            {
                    <TxtTag className={frmtd_className}>
                        {children}
                    </TxtTag>
            }
        </>
    )
}