/* eslint-disable */
import type { ComponentProps, Component, JSX } from 'solid-js'
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe';
import type { Assign, DistributiveOmit, DistributiveUnion, JsxHTMLProps, JsxStyleProps, Pretty } from './system-types';

interface Dict {
  [k: string]: unknown
}

export type ElementType<P = any> = keyof JSX.IntrinsicElements | Component<P>

export interface StyledComponent<T extends ElementType, P extends Dict = {}> {
  (props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>): JSX.Element
  displayName?: string
}

interface RecipeFn {
  __type: any
}

export interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: TProps
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

export type JsxRecipeProps<T extends ElementType, P extends Dict> = JsxHTMLProps<ComponentProps<T>, P>;

export type JsxElement<T extends ElementType, P extends Dict> = T extends StyledComponent<infer A, infer B>
  ? StyledComponent<A, Pretty<DistributiveUnion<P, B>>>
  : StyledComponent<T, P>

export interface JsxFactory {
  <T extends ElementType>(component: T): StyledComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>, options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>): JsxElement<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P, options?: JsxFactoryOptions<JsxRecipeProps<T, P['__type']>>): JsxElement<T, P['__type']>
}

export type JsxElements = {
  [K in keyof JSX.IntrinsicElements]: StyledComponent<K, {}>
}

export type Styled = JsxFactory & JsxElements

export type HTMLStyledProps<T extends ElementType> = JsxHTMLProps<ComponentProps<T>, JsxStyleProps>

export type StyledVariantProps<T extends StyledComponent<any, any>> = T extends StyledComponent<any, infer Props> ? Props : never