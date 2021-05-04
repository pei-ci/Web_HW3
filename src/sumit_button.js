import React from 'react'
import {Button} from '@material-ui/core'
const SumitButton=()=>{
    const buttonStyle={backgroundColor:'#C1CAFF'}
    return(
        <Button type="submit" style={buttonStyle} variant='contained' fullWidth>Sign in</Button>
    )
}
export default SumitButton