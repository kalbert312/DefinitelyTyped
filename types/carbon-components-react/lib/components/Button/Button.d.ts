import * as React from "react";
import {
    EmbeddedIconProps,
    EmbeddedTooltipProps,
    ReactButtonAttr,
    RenderIconProps,
    FCReturn, JSXIntrinsicElementProps, ReactAnchorAttr, ForwardRefProps,
} from '../../../typings/shared';

export type ButtonKind = "danger" | "danger--primary" | "ghost" | "primary" | "secondary" | "tertiary";
export type ButtonSize = "default" | "field" | "small";

export interface ButtonRenderIconRenderProps {
    "aria-hidden": boolean;
    "aria-label": EmbeddedIconProps["iconDescription"];
    className: string;
}

// these props are not passed to the general createElement call
interface ButtonBaseIsolatedProps extends EmbeddedIconProps, EmbeddedTooltipProps, RenderIconProps<ButtonRenderIconRenderProps> {
    hasIconOnly?: boolean;
    kind?: ButtonKind; // required by has default value
    size?: ButtonSize;
    /**
     * @deprecated
     */
    small?: boolean;
}
type SafeProps<P> = Omit<P, 'as' | keyof ButtonBaseIsolatedProps>;

interface ButtonBaseProps extends ButtonBaseIsolatedProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export interface ButtonDefaultProps extends ButtonBaseProps, ReactButtonAttr {
    as?: undefined;
    href?: undefined;
}

export interface ButtonAnchorProps extends ButtonBaseProps, Omit<ReactAnchorAttr, "href"> {
    as?: undefined;
    href: string;
}

export type ButtonIntrinsicProps<K extends keyof JSX.IntrinsicElements> = ButtonBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type ButtonCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? ButtonBaseProps &
            SafeProps<P> & {
                as: C;
            }
    : never;

//
// Note: TypeScript will try to select the best overload but this is not always easily predictable the more freedom the
// generic types have or the more they overlap. If you're having difficulty with these types you can try reexporting the
// component casted to your desired type.
// ex:
// import { Button } from "carbon-components-react"
// export const DefaultButton = Button as React.FC<ButtonDefaultProps>;
// export const AnchorButton = Button as React.FC<ButtonAnchorProps>;
//
// or just create a wrapper component.
//
declare function Button(props: ForwardRefProps<HTMLButtonElement, ButtonDefaultProps>): FCReturn;
declare function Button(props: ForwardRefProps<HTMLAnchorElement, ButtonAnchorProps>): FCReturn;
declare function Button<T extends keyof JSX.IntrinsicElements, R extends HTMLElement = HTMLElement>(props: ForwardRefProps<R, ButtonIntrinsicProps<T>>): FCReturn;
declare function Button<T extends React.JSXElementConstructor<any>, R = unknown>(props: ForwardRefProps<R, ButtonCustomComponentProps<T>>): FCReturn;

export default Button;
