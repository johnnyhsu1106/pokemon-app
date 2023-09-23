import { 
  Box,
  Button 
} from '@chakra-ui/react';

const CaptureButton = ({
  isCaptureButtonDisabled,
  onClickCaptureButton
}) => {
  
  return (
    <Box>
      <Button
        isDisabled={isCaptureButtonDisabled}
        onClick={onClickCaptureButton} 
        w='full' 
        borderWidth={4} 
        borderColor='#333'
      >
        Capture
      </Button>
    </Box>
  )
}

export default CaptureButton
