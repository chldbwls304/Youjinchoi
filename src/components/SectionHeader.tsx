import { Box, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react'

interface SectionHeaderProps {
  label: string
  title: string
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  const labelColor = useColorModeValue('brand.500', 'brand.400')

  return (
    <VStack spacing={3} align="flex-start" mb={12}>
      {/* Label with dash line */}
      <Box display="flex" alignItems="center" gap={2}>
        <Box width="3" height="0.5" bg={labelColor} />
        <Text
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.05em"
          color={labelColor}
        >
          {label}
        </Text>
      </Box>

      {/* Main title */}
      <Heading
        as="h2"
        size="2xl"
        fontWeight="700"
        color="text.primary"
        lineHeight="1.2"
      >
        {title}
      </Heading>
    </VStack>
  )
}
