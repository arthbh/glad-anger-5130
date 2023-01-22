import { Card, CardHeader, CardBody, CardFooter, Box, Badge,Image, ChakraProvider } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


export default function ProductCard(property) {
    // const property = {
    //   imageUrl: 'https://bit.ly/2Z4KKcF',
    //   imageAlt: 'Rear view of modern home with pool',
    //   beds: 3,
    //   baths: 2,
    //   title: 'Modern home in city center in the heart of historic Los Angeles',
    //   formattedPrice: '$1,900.00',
    //   reviewCount: 34,
    //   rating: 4,
    // }
  
    return (
<>

{/* <div>
    <img src={property.imageUrl} alt="" />
    <h3>{property.title}</h3>
    <p>{property.formattedPrice}</p>
    <div>
        <img src="https://as1.ftcdn.net/v2/jpg/01/81/52/24/1000_F_181522451_WRuHxa8M9M050I0J6wLiO6VyxEAqfZB2.jpg" alt="" width="10%" />
        <img src="https://as1.ftcdn.net/v2/jpg/01/81/52/24/1000_F_181522451_WRuHxa8M9M050I0J6wLiO6VyxEAqfZB2.jpg" alt="" width="10%" />
        <img src="https://as1.ftcdn.net/v2/jpg/01/81/52/24/1000_F_181522451_WRuHxa8M9M050I0J6wLiO6VyxEAqfZB2.jpg" alt="" width="10%" />
        <img src="https://as1.ftcdn.net/v2/jpg/01/81/52/24/1000_F_181522451_WRuHxa8M9M050I0J6wLiO6VyxEAqfZB2.jpg" alt="" width="10%" />
    </div>
</div> */}
<ChakraProvider>
      <Box w="">
        <Image src={property.imageUrl} alt={property.imageAlt} w="60%" />
  
        <Box p='9'>  
          <Box
            mt='2'
            // fontWeight=''
            as='p'
            lineHeight='tight'
            noOfLines={1}
            w="80%"
            ml="40px"
          >
            {property.title}
          </Box>
  
          <Box ml="-200px" >
            {property.formattedPrice}
          </Box>
  
          <Box display='flex' mt='2' alignItems='center' ml="65px">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={'teal.500'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
      </ChakraProvider>
      </>
    )
  }