import React from 'react';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

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
        this.props.updateItem(event, '1', this.state.friend);
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
                <h2>Update a friend</h2>
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

                    <button type='submit'>Update Friend</button>
                </form>
            </div>
        );
    }
}

export default UpdateFriend;