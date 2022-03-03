import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import StudentManagement from './Components/StudentManagement'

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/StudentsManagement' element={<StudentManagement />} />
            </Routes>
        </BrowserRouter>
    )
}