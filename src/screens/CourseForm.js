import React, { useState } from 'react'
import Button from '../components/Button'
import { postFBdata } from './firebaseMethods'

export const CourseForm = () => {
    const [model, setModel] = useState({});
    const saveCourse = () => {
        postFBdata('course', model).then((res) => {
            console.log(res + "done")
        }).catch((err) => { console.log(err) })
    }
    return (
        <>
            <div>
                <h1>Course Form</h1>
                <input type="text" placeholder="Course Name" className="rounded p-2 w-75 my-1"
                    onChange={(e) => setModel({ ...model, name: e.target.value })}
                />
                <input type="text" placeholder="Duration" className="rounded p-2 w-75 my-1"
                    onChange={(e) => setModel({ ...model, duration: e.target.value })}
                />
                <input type="number" placeholder="Fees" className="rounded p-2 w-75 my-1"
                    onChange={(e) => setModel({ ...model, fees: e.target.value })}
                />
                <input type="text" placeholder="Teacher Name" className="rounded p-2 w-75 my-1"
                    onChange={(e) => setModel({ ...model, teacherName: e.target.value })}
                />
                <Button className="rounded p-2 w-75 my-1" label="Save"
                    onClick={saveCourse}
                />
            </div>
        </>
    )
}
