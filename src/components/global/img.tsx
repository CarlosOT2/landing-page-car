//# Utils //
import FilterClasses from '../../shared/utils/FilterClasses'
//# Classes //
import './img.scss'

type Img = {
    /** src of the image */
    src: string
    /** additional CSS classes to apply */
    className?: string
    /** alt of the image */
    alt?: string
    /** style to not select the image */
    noSelect?: boolean
    /** aria-hidden of the image */
    ariaHidden?: boolean
}

export default function Img({ src, className, alt, noSelect, ariaHidden = undefined }: Img) {
    const frmtd_className = FilterClasses(`img
    ${noSelect ? 'img--no-select' : ''}
    ${className}
    `)

    return (
        <img
            className={frmtd_className}
            src={src || undefined}
            alt={alt || undefined}
            aria-hidden={ariaHidden}
            loading='lazy'
        />
    )
}