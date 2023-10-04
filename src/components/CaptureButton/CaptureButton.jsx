import { 
  Box,
  Button 
} from '@chakra-ui/react';

const CaptureButton = ({
  isDisabled,
  onClick
}) => {

  return (
    <Box>
      <Button
        isDisabled={isDisabled}
        onClick={onClick} 
        borderWidth={4} 
        borderColor='#333'
        rounded={10}
      >
        Capture
      </Button>
    </Box>
  )
}

export default CaptureButton
