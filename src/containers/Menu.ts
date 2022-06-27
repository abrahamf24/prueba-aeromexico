import { connect } from 'react-redux'
import { toggleFavoriteCharacter } from '../actions'
import { Menu as MainMenu } from '../components'
import { Character } from '../library/types'

const mapStateToProps = (state, props) => {
  return {
    favorites: state.characters.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteFavorite: (character: Character) => {
      dispatch(toggleFavoriteCharacter(character))
    }
  }
}

const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default Menu