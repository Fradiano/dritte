import React from 'react';

class UnlikeButton extends React.Component{
    constructor(props) {
        super(props);
this.state = {
  liked : false
}
    }

    render = () => {
        if (this.state.liked) {
            return (
                <div>
                    <p>müll.</p>
                </div>
            );
        }
        return (
            <div>
                <button onClick={() => this.setState({ liked: true }) }>
                    Gefällt mir nicht mehr
                </button>
                <p></p>
            </div>

        );
    }
}

export default UnlikeButton