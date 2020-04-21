import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../actions/favorites'
import PropTypes from 'prop-types'

class Main extends Component{
   static propTypes = {
        addFavorite: PropTypes.func.isRequired,
        favorite: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            url: PropTypes.string,
        })).isRequired
   };

    state = {
        repositoryInput: '',
    };

   handleAddRepository = (event) =>{
    event.preventDefault();   
    this.props.addFavorites();
   }
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleAddRepository}>
                    <input 
                    placeholder="Usuario/Repositorio"
                    value={this.state.repositoryInput}
                    onChange={e=> this.setState({repositoryInput: e.target.value})}
                    />
                    <button type="submit">Adicionar</button>
                </form>
                <ul>
                    {this.props.favorites.map(favorite => (
                        <li key={favorite.id}>
                            <p>
                                <strong>{favorite.name}</strong> ({favorite.description})
                            </p>
                            <a href={favorite.url}>Acessar</a>
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites,
})

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
