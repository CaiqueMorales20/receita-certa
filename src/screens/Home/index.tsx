// Imported Components
import Container from '../../../components/Container'
import { Text } from '../../../global/globalStyle'

// Styled Components
import { HomeS } from './style'

// Functional Component
export default function Home() {
  // Rendering
  return (
    <Container>
      <HomeS>
        <Text size="lg" color="text-white">
          Home
        </Text>
      </HomeS>
    </Container>
  )
}
