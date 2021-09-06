import useTableStore from '../tableStore'
import { VStack, Image, Text } from '@chakra-ui/react'

const MeinHeader = () => {
  const restaurant = useTableStore((state) => state.restaurant)

  return (
    <VStack pt="75px">
      <Image src={restaurant && restaurant.logo} w="140px" />
      <Text fontSize="24px" fontWeight="semibold" color="#24423B">
        Menu
      </Text>
    </VStack>
  )
}

export default MeinHeader