//# Components //
import Text from './text'
//# Libs //
import { Link } from 'react-router';
//# Utils //
import FilterClasses from '../../shared/utils/FilterClasses';
//# Classes //
import './link.scss'

interface link {
    /** to of the link */
    to?: string
    /** additional CSS classes to apply */
    className?: string
    /** children of the link */
    children?: React.ReactNode
}

export default function link({ to = "/", className = '', children }: link) {
    const frmtd_className: string = FilterClasses(`
                    link
                    ${className}
                    `)
    return (
        <>
            <Link to={to} className={frmtd_className}>
                {
                    typeof children === 'string' ?
                        <Text tag='span' className={FilterClasses(frmtd_className)}>
                            {children}
                        </Text>
                        :
                        children
                }
            </Link>
        </>
    )
}