import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { formatPostData } from '../helpers';

class AddStudent extends Component {

    state = {
        name: '',
        course: '',
        grade: '',
        instructor: '',
        notes: '',
    };

    handleKeyPress = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const formattedStudent = formatPostData(this.state);

        await axios.post('/server/createstudent.php', formattedStudent);        

        this.props.history.push('/');
    }

    resetForm = () => {
      this.setState({
          name: '',
          course: '',
          grade: '',
          instructor: '',
          notes: '',
      });
    };

    render(){
        const{name, course, grade, instructor, notes} = this.state;

        console.log('Add Student Props: ', this.props);

        return(
            <div>
                <h1 className='center'>Add Student</h1>

                <div className="row">
                    <div className="class s12 right-align">
                        <Link className='btn blue' to='/'>Home</Link>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name='name' id='name' type="text" value={name} autoComplete='off'/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name='course' id='course' type="text"  value={course} autoComplete='off'/>
                            <label htmlFor="course">Course</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name='grade' id='grade' type="text" value={grade} autoComplete='off'/>
                            <label htmlFor="grade">Grade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name='instructor' id='instructor' type="text" value={instructor} autoComplete='off'/>
                            <label htmlFor="instructor">Instructor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name='notes' id='notes' type="text" value={notes} autoComplete='off'/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button type='button' onClick={this.resetForm} className='btn red darken-2 waves-effect waves-light'>Clear</button>
                        </div>
                        <div className="col s6">
                            <button className='btn green darken-2 center'>Add</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
};

export default AddStudent;