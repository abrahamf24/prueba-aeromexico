import { connect } from 'react-redux'
import { toggleFavoriteCharacter } from '../actions'
import { HouseCard } from '../components'
import { Character } from '../library/types'

const mapStateToProps = (state, props) => {
  return {
    isFavorite: state.characters.favorites.find(favorite => favorite.name === props.character.name)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleFavorite: (character: Character) => {
      dispatch(toggleFavoriteCharacter(character))
    }
  }
}

const CharacterHouseCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseCard)

export default CharacterHouseCard