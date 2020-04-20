import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../actions/favorites'

class Main extends Component{
   state = {
        repositoryInput: '',
   };

   handleAddRepository = () =>{
       this.props.addFavorite();
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
                    <li>
                        <p>
                            <strong>Qualquer coisa temporaria</strong> Qualquer coisa que for adicionado aqui no momento não importa
                        </p>
                        <a href="http://github.com">Acessar</a>
                    </li>
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites,
})

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Main);
