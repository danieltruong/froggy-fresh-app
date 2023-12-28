/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrogNavBarHeader3OverridesProps = {
    FrogNavBarHeader3?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Amplify Mark"?: PrimitiveOverrideProps<ViewProps>;
    "403618143_1392773568283732_3797741273867155381_n 1"?: PrimitiveOverrideProps<ImageProps>;
    "Froggy Fresh App"?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FrogNavBarHeader3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FrogNavBarHeader3OverridesProps | undefined | null;
}>;
export default function FrogNavBarHeader3(props: FrogNavBarHeader3Props): React.ReactElement;
