import React, {Component} from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../assets/css/app.scss';
import AddStudent from './add_student'
import Table from './table';
import {formatPostData} from '../helpers/index';


class App extends Component {
    state = {
        students: []
    };

    componentDidMount(){
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        const formattedId = formatPostData({id: id});
        await axios.post('/server/deletestudent.php', formattedId);

        this.getStudentData();
    }

    addStudent = async (student) => {
        const formattedStudent = formatPostData(student);

        await axios.post('/server/createstudent.php', formattedStudent);

        this.getStudentData();

    };

    async getStudentData(){
        //Call server to get student data

        const response = await axios.get('http://localhost/server/getstudentlist.php');
        console.log('Get List Resp: ', response);

        if(response.data.success){
            this.setState({
                students: response.data.data
            });
        } else{
            this.setState({
                students: response.data.data || []
            })
        }
        // axios.get('http://localhost/server/getstudentlist.php').then((response) => {
        //     console.log('Server Response: ', response.data.data);
        //     this.setState({
        //         students: response.data.data
        //     });
        // });


    };


    render() {
        return (
            <div>
                <h1 className='center'>SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>

            </div>
        );
    }
};

export default App;
