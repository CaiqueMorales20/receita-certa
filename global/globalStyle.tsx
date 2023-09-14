// Imports
import styled, { css } from 'styled-components/native'

// CM Framework
// Types
interface TitleType {
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  color?: 'text-black' | 'text-white' | 'text-gray' | 'text-green'
  weight?: 'bold' | 'semibold' | 'normal' | 'thin'
  align?: 'left' | 'justify' | 'center'
}

export const AppS = styled.SafeAreaView`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
`

// CM Framework
export const Text = styled.Text<TitleType>`
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size === 'xs'
        ? props.theme.font.xs
        : props.size === 'sm'
        ? props.theme.font.sm
        : props.size === 'base'
        ? props.theme.font.base
        : props.size === 'lg'
        ? props.theme.font.lg
        : props.size === 'xl'
        ? props.theme.font.xl
        : ''};
      line-height: ${props.size === 'xs'
        ? '16px'
        : props.size === 'sm'
        ? '16px'
        : props.size === 'base'
        ? '30px'
        : props.size === 'lg'
        ? '30px'
        : props.size === 'xl'
        ? '30px'
        : ''};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color === 'text-black'
        ? props.theme.colors.neutral900
        : props.color === 'text-white'
        ? props.theme.colors.neutral400
        : props.color === 'text-gray'
        ? props.theme.colors.neutral700
        : props.color === 'text-green'
        ? props.theme.colors.primary
        : ''};
    `}
    ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight === 'bold'
        ? '700'
        : props.weight === 'semibold'
        ? '500'
        : props.weight === 'normal'
        ? '400'
        : props.weight === 'thin'
        ? '300'
        : ''};
    `}
    ${(props) =>
    props.align &&
    css`
      text-align: ${props.align === 'left'
        ? 'left'
        : props.align === 'center'
        ? 'center'
        : props.align === 'justify'
        ? 'justify'
        : ''};
    `}
`
