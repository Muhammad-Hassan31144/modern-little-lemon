import { GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Rater() {
  return (
    <GridItem className='rater'>
        <VStack alignItems='start' spacing='1rem'>
            <HStack>
                <Text as='b' fontSize='18px'>Rating</Text>
                <svg width="102" height="18" viewBox="0 0 102 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 5.93617H17.5595L12.2694 9.60493L14.2901 15.5411L9 11.8723L3.70993 15.5411L5.73056 9.60493L0.440492 5.93617H6.97937L9 0Z" fill="#EE9972"/>
                    <path d="M30 0L32.0206 5.93617H38.5595L33.2694 9.60493L35.2901 15.5411L30 11.8723L24.7099 15.5411L26.7306 9.60493L21.4405 5.93617H27.9794L30 0Z" fill="#EE9972"/>
                    <path d="M51 0L53.0206 5.93617H59.5595L54.2694 9.60493L56.2901 15.5411L51 11.8723L45.7099 15.5411L47.7306 9.60493L42.4405 5.93617H48.9794L51 0Z" fill="#EE9972"/>
                    <path d="M72 0L74.0206 5.93617H80.5595L75.2694 9.60493L77.2901 15.5411L72 11.8723L66.7099 15.5411L68.7306 9.60493L63.4405 5.93617H69.9794L72 0Z" fill="#EE9972"/>
                    <path d="M93 0L95.0206 5.93617H101.56L96.2694 9.60493L98.2901 15.5411L93 11.8723L87.7099 15.5411L89.7306 9.60493L84.4405 5.93617H90.9794L93 0Z" fill="#EE9972"/>
                </svg>
            </HStack>
            <HStack alignItems='start'>
                <img src='./images/rater.png' alt='rater' />
                <VStack alignItems='start' h='100%' justifyContent='space-between'>
                    <Text as='b' fontSize='18px'>Yousef</Text>
                    <Text as='b' fontSize='18px'>Ferman</Text>
                </VStack>
            </HStack>
            <Text fontSize='16px' w='15rem'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
        </VStack>
    </GridItem>
  )
}

export default Rater