import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import cuisine from './cuisine.jpg'

class CuisineCard extends React.Component {
  render() {
    return (
      <Box width={500}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}
        >
          <Image src={cuisine} />
          <Box px={2}>
            <Heading as="h3">Look at this great food!</Heading>
            <Text fontSize={0}>What's your favorite?</Text>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default CuisineCard;
