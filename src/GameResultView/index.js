import {
  ShowResultContainer,
  ResultImageContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props

  const {imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImageContainer>
        <ResultTextImgContainer>
          <ResultText>You</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImageContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
