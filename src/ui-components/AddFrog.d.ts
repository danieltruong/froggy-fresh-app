/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type AddFrogOverridesProps = {
    AddFrog?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile3858580"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Edit Profile3858582"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField3858587?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3858588?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3858589?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3858614?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddFrogProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddFrogOverridesProps | undefined | null;
}>;
export default function AddFrog(props: AddFrogProps): React.ReactElement;
