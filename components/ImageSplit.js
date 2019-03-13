import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Box from './Box'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const ImageSplit = ({ children }) => {
    
  const [a, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}>
        <Box width={.25}>
          {a}
        </Box>
        <Box width={.70}>
          {rest}
        </Box>
      </Flex>
    </Root>
  )
}

export default ImageSplit