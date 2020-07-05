import { FC } from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
  display: inline-block;
  margin-left: 50%;
  margin-top: 20%;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #000000;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader: FC = () => <StyledLoader />

export default Loader
