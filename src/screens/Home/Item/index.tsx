import Container from '../../../../components/Container'
import { Text } from '../../../../global/globalStyle'
import { Banner, ItemS, TextContainer } from './style'

// Functional Component
export default function Item() {
  // Rendering
  return (
    <Container>
      <ItemS>
        <Banner
          source={{ uri: 'https://imgur.com/J7IYP2E.png' }}
          alt="Brigadeiro com confete"
          width={1000}
          height={1000}
        />
        <TextContainer>
          <Text size="base">Brigadeiro com confete</Text>
        </TextContainer>
      </ItemS>
    </Container>
  )
}
