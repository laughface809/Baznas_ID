import React from 'react'
import { Button as Btn, styled } from '@mui/material'

const Button = (props) => {
    return (
        <StyledButton variant='contained' disableElevation size="large" {...props} />
    )
}

const StyledButton = styled(Btn)({
    alignSelf: 'flex-start',
    fontWeight: "bold",
    borderRadius: 10,
    color: 'white',
    textTransform: 'none',
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 12,
    paddingBottom: 12,
})

export default Button