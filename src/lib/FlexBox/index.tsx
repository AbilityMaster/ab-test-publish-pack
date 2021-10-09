import React from 'react';

interface IFlexBox {
    alignItems?: 'center' | 'flex-start' | 'flex-end',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    direction?: "row" | 'column',
    className?: string,
    children?: any
}

const getModifyClasses = (baseClass: string, propsClassName: string, mods: any) => {
    const modifyClasses = Object.keys(mods)
        .map(mod => mods[mod] ? `${baseClass}_${String(mod)}-${mods[mod]}` : "")
        .filter(v => Boolean(v)).join(" ");
    const _modifyClasses = modifyClasses && ` ${modifyClasses}`;
    const _propsClassName = propsClassName && ` ${propsClassName}`;


    return `${baseClass}${_propsClassName}${_modifyClasses}`;
};

export const FlexBox = (props: IFlexBox) => {
    const {
        className = "",
        children,
        ...mods
    } = props;

    return (
        <div className={getModifyClasses("flex-box", className, mods)}>
            {children}
        </div>
    )
};
