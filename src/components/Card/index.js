import React from 'react'
import SecondaryButton from '../../common/SecondaryButton';
import DeleteCardModal from '../DeleteCardModal';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        const {id, removeCard} = this.props;
        const {showModal} = this.state;

        return (
            <div>
                <span>{id}</span>
                <SecondaryButton handleClick={this.openModal}>Remove</SecondaryButton>
                
                {showModal && (
                    <DeleteCardModal 
                        closeModal={this.closeModal} 
                        removeCard={removeCard}
                    />
                )}
            </div>
        );
    }
}

export default Card;