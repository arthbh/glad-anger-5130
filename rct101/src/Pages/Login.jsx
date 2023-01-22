// import React from 'react'

// export default function Signup() {
//   return (
//     <div>Signup</div>
//   )
// }


import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    Image,
    // useBreakpointValue,
    // IconProps,
    Icon
  } from '@chakra-ui/react';
  import { ChakraProvider } from '@chakra-ui/react';
  
  // const avatars = [
  //   {
  //     name: 'Ryan Florence',
  //     url: 'https://bit.ly/ryan-florence',
  //   },
  //   {
  //     name: 'Segun Adebayo',
  //     url: 'https://bit.ly/sage-adebayo',
  //   },
  //   {
  //     name: 'Kent Dodds',
  //     url: 'https://bit.ly/kent-c-dodds',
  //   },
  //   {
  //     name: 'Prosper Otemuyiwa',
  //     url: 'https://bit.ly/prosper-baba',
  //   },
  //   {
  //     name: 'Christian Nwamba',
  //     url: 'https://bit.ly/code-beast',
  //   },
  // ];
  
  export default function Login() {
    return (
        <ChakraProvider>
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            {/* <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Senior web designers{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                &
              </Text>{' '}
              Full-Stack Developers
            </Heading> */}
  <Image mt={"50px"} src={"https://cdn5.engagebay.com/new/assets/img/cta-img.svg"}/>
  
  
            <Stack direction={'row'} spacing={4} align={'center'}>
              {/* <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup> */}
              {/* <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text> */}
              {/* <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={({ base: '44px', md: '60px' })}
                minHeight={({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex> */}
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              {/* <Image width={"60%"} marginLeft={"90px"}  src={"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png"}/> */}
              {/* <Heading>COACH</Heading> */}
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                LOGIN
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  {/* ! */}
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Don't have an account yet? 
              <Text
                  as={'span'}
                  bgGradient="linear(to-r, blue.400,blue.500)"
                  bgClip="text">
                  Sign Up
                </Text>
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="Email Address"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Password"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="+91 ___ __ ___ ___"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                         <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,orange.300)"
                color={'white'}
                // fontSize={"16px"}
                _hover={{
                  bgGradient: 'linear(to-r, orange.200,red.500)',
                  boxShadow: 'xl',
                }}>
                LOGIN
              </Button>
                <Button fontFamily={'heading'} bg={'gray.100'} color={'blue.600'}
                  ><Image mr={"10px"} w={"6%"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20221203181234' /> SIGN IN WITH G SUITE</Button>
              </Stack>
     
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
      </ChakraProvider>
    );
  }
  
  export const Blur = (props) => {
    return (
      <Icon
        width={({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };