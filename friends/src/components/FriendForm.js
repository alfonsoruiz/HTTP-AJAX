import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: this.props.activeItem || {
            name: '',
            age: '',
            email: ''
        }
    };

    changeHandler = event => {
        event.persist();
        let value = event.target.value;

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: value
            }
        }));
    };

    handleSubmit = event => {
        this.props.addItem(event, this.state.friend);
        this.setState({
            friend : {
                name: '',
                age: '',
                email: ''
            }
        });
    };

    render() {
        return (
            <div className='form-wrapper'>
                <h2>Add a friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='name' 
                        type='text' 
                        value={this.state.friend.name} 
                        placeholder='Name' 
                        onChange={this.changeHandler}
                    />
                    <input 
                        name='age' 
                        type='text' 
                        value={this.state.friend.age} 
                        placeholder='Age' 
                        onChange={this.changeHandler}
                    />
                    <input 
                        name='email' 
                        type='text' 
                        value={this.state.friend.email} 
                        placeholder='Email' 
                        onChange={this.changeHandler}
                    />

                    <button type='submit'>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;