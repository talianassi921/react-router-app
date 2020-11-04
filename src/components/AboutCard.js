import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import mapwithpins from './mapwithpins.jpg'

class AboutCard extends React.Component {
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
          <Image src={mapwithpins} />
          <Box px={2}>
            <Heading as="h3">Where I've traveled</Heading>
            <Text fontSize={0}>Where to next?</Text>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default AboutCard;
