import { connect } from 'react-redux'
import { toggleFavoriteCharacter } from '../actions'
import { HouseCard } from '../components'

const mapStateToProps = (state, props) => {
  return {
    isFavorite: state.characters.favorites.includes(props.character.name)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleFavorite: (name: string) => {
      dispatch(toggleFavoriteCharacter(name))
    }
  }
}

const CharacterHouseCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseCard)

export default CharacterHouseCard