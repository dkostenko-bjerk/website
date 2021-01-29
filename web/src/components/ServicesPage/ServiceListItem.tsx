import React from 'react'
import { Box, Button, Container, Grid, Heading, Label } from 'theme-ui'
import Img from "gatsby-image"
import Link from '../Link';

export interface ServiceListItemProps {
    name: string;
    title: string;
    description: string;
    url: {
        navigationLink: string;
        linkText: string;
    }
    serviceImage?: any;
    personPhoto?: any;
    textAlign: 'left' | 'right';
    dividedPhoto?: any;
}

const ServiceListItem: React.FC<{data: ServiceListItemProps}> = ({data}) => (
  <Container id={data.name} sx={{mt: '10%'}}>
    <Grid gap={2} columns={[1, 1, 2]} px={5}>
      <Box>
        <Heading pb={3}>{data.title}</Heading>
        <Label>{data.description}</Label>
        <Button sx={{color: 'black', fontSize: 1, mt: 4}}>
          <Link
            to={data.url.navigationLink}>
              {data.url.linkText}
          </Link>
        </Button>
      </Box>
      <Box>
        <Img 
          fluid={data.textAlign === 'left' ? data.personPhoto : data.serviceImage} 
          durationFadeIn={0} 
          fadeIn={false}
          draggable={false}
        />
        <Img 
          fluid={data.textAlign === 'left' ? data.serviceImage : data.personPhoto} 
          durationFadeIn={0} 
          fadeIn={false}
          draggable={false}
        />
        </Box>
    </Grid>
    {data.dividedPhoto && <Box sx={{width: '100%', height: 'auto'}}>
      <Img 
        fluid={data.dividedPhoto} 
        durationFadeIn={0} 
        fadeIn={false}
        draggable={false}
      />
    </Box>}
  </Container>
)

export default ServiceListItem;
