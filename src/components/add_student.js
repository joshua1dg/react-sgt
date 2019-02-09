import React, {Component} from 'react';

class AddStudent extends Component {

    state = {
        name: '',
        course: '',
        grade: ''
    };

    handleKeyPress = (event) => {
        console.log('Event Name: ', event.target.name);
        console.log('Event Value: ', event.target.value);

        switch(event.target.name){
            case 'name':
                this.setState({
                    name: event.target.value
                });
                break;
            case 'course':
                this.setState({
                    course: event.target.value
                });
                break;
            case 'grade':
                this.setState({
                    grade: event.target.value
                });
                break;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form Submitted ', this.state)
    }

    render(){
        const{name, course, grade} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name='name' id='name' type="text" value={name}/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name='course' id='course' type="text"  value={course}/>
                        <label htmlFor="course">Course</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name='grade' id='grade' type="text" value={grade}/>
                        <label htmlFor="grade">Grade</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button type='button' className='btn red darken-2 waves-effect waves-light'>Clear</button>
                    </div>
                    <div className="col s6">
                        <button className='btn green darken-2 center'>Add</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default AddStudent;