import { FC } from 'react'
import styled from 'styled-components'

const Snackbar = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #fff;
  color: #333;
  text-align: center;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 80px;
  &.show {
    visibility: visible;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 80px;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`

type Props = {
  toastText: string
}

const Toast: FC<Props> = ({ toastText }) => (
  <Snackbar className={toastText && 'show'}>{toastText}</Snackbar>
)

export default Toast
