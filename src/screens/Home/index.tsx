// Imported Components
import Container from '../../../components/Container'
import { Text } from '../../../global/globalStyle'
import List from './List'

// Styled Components
import { HomeS } from './style'

// Functional Component
export default function Home() {
  // Rendering
  return (
    <Container>
      <HomeS>
        <Text size="lg" color="text-white" weight="bold">
          Receita certa
        </Text>
        <List />
      </HomeS>
    </Container>
  )
}
