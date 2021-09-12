import {
  Avatar,
  Flex,
  HStack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const UserProfile = (props) => {
  const { name, image, email } = props
  return (
    <HStack spacing="4" px="2" flexShrink={0} borderTopWidth="1px" p="4">
      <Avatar size="sm" name={name} src={image} />
      <Flex direction="column" fontWeight="medium">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs" lineHeight="shorter" color={'#1a1a1a'}>
          {email}
        </Text>
      </Flex>
    </HStack>
  )
}