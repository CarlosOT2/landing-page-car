//# Utils //
import FilterClasses from '../../shared/utils/FilterClasses';
//# Classes //
import './button.scss'

interface button {
    /** type of the button */
    type: "button" | "submit" | "reset"
    /** additional CSS classes to apply */
    className?: string
    /** children of the link */
    children?: React.ReactNode
    /** Click event handler for the button */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ type, className, children, onClick }: button) {
    const frmtd_className: string = FilterClasses(`
                    button
                    ${className}
                    `)
    return (
        <button
            type={type}
            className={frmtd_className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}