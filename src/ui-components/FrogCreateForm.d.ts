/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FrogCreateFormInputValues = {
    name?: string;
    price?: number;
    description?: string;
    imageUrl?: string;
};
export declare type FrogCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrogCreateFormOverridesProps = {
    FrogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FrogCreateFormProps = React.PropsWithChildren<{
    overrides?: FrogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FrogCreateFormInputValues) => FrogCreateFormInputValues;
    onSuccess?: (fields: FrogCreateFormInputValues) => void;
    onError?: (fields: FrogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrogCreateFormInputValues) => FrogCreateFormInputValues;
    onValidate?: FrogCreateFormValidationValues;
} & React.CSSProperties>;
export default function FrogCreateForm(props: FrogCreateFormProps): React.ReactElement;
