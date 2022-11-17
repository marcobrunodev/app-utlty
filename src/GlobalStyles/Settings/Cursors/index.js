import { createGlobalStyle } from 'styled-components'
import auto from '../../../assets/images/auto.png'
import pointer from '../../../assets/images/pointer.png'
import text from '../../../assets/images/text.png'

const Cursors = createGlobalStyle`
  :root {
    --cursor-auto: url(${auto}), auto;
    --cursor-pointer: url(${pointer}), pointer;
    --cursor-text: url(${text}), text;
  }
`

export default Cursors
