import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        console.log('Friend Form has mounted');
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input name='name' type='text' value={this.state.name} placeholder='Name' onChange={this.handleInputChange}/>
                    <input name='age' type='text' value={this.state.age} placeholder='Age' onChange={this.handleInputChange}/>
                    <input name='email' type='email' value={this.state.email} placeholder='Email' onChange={this.handleInputChange}/>

                    <button type='submit'>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;