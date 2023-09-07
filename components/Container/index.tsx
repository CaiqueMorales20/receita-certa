import { ContainerS } from "./style";

// Types
type ContainerType = {
  children: React.ReactNode,
}

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return (
    <ContainerS>
      {children}
    </ContainerS>
  );
}