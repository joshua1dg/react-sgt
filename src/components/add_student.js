import React, {Component} from 'react';

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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state);
        this.resetForm();
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

        return(
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
        );
    }
};

export default AddStudent;