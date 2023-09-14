// Imports
import styled from 'styled-components/native'

// Styled Components
export const ItemS = styled.View`
  width: 100%;
  border: 4px solid #fff;
  height: 200px;
  background-color: red;
`

export const Banner = styled.Image`
  width: 100%;
  height: 60%;
`

export const TextContainer = styled.View`
  background-color: ${(props) => props.theme.colors.neutral400};
  padding: 10px;
`
