//# Libs //
import { useEffect, useRef, useState } from 'react';
//# Utils //
import FilterClasses from '../../shared/utils/FilterClasses'
//# Types //
import type React from 'react';
//# Classes //
import './Animation.scss';

type Props = {
    children?: React.ReactNode;
    /** HTML tag or component to render. Default: 'div' */
    Tag?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>;
    /** Direction the element slides in from */
    type: 'up' | 'right' | 'left';
    /** id */
    id?: string;
    /** Extra CSS classes */
    className?: string;
    /** aria-label */
    arialabel?: string;
    /** aria-hidden */
    ariahidden?: boolean;
    /** Image source — only used when Tag='img' */
    src?: string;
    /** Image alt text — only used when Tag='img' */
    alt?: string;
    /** role */
    role?: string;
    /** onMouseEnter */
    onMouseEnter?: (...args: any[]) => any;
    /** onMouseLeave */
    onMouseLeave?: (...args: any[]) => any;
};

export default function Animation({
    Tag = 'div',
    role,
    children,
    alt,
    arialabel,
    ariahidden,
    type,
    id,
    className,
    src,
    onMouseEnter,
    onMouseLeave,
}: Props) {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    observer.unobserve(entry.target);
                    setTimeout(() => setIsVisible(true), 150);
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const appearClass = isVisible
        ? 'appear'
        : `hidden-${type}`;

    const frmtdClassName = FilterClasses(
        ['container', className, appearClass]
            .filter(Boolean)
            .join(' ')
    );


    const imgProps = Tag === 'img' ? { src, alt } : {};

    return (
        <Tag
            id={id}
            ref={ref as any}
            {...imgProps}
            className={frmtdClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role={role}
            aria-label={arialabel}
            aria-hidden={ariahidden}
        >
            {children}
        </Tag>
    );
}