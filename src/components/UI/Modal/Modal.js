import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    componentWillUpdate() {
        console.log('[Modal] componentWillUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
                <div className='Modal' style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0' }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }

}

export default Modal;
