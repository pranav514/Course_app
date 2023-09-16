// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';

// function Course() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleCourse = async () => {
//     try {
//       // Retrieve the JWT token from localStorage
//       const jwtToken = localStorage.getItem('jwtToken');

//       const response = await fetch("http://localhost:3000/admin/courses", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: title,
//           description: description,
//           imageLink: '', // Note the corrected property name
//           published: true,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           // Add the JWT token to the Authorization header
//           'Authorization': 'Bearer ' + jwtToken,
//         },
//       });
//       console.log(response);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//         console.error('Failed to add course');
//       }
//     } catch (error) {
//       console.error('Error while adding course:', error);
//     }
//   };

//   return (
//     <div style={{ marginTop: 100 }}>
//       <center>
//         <Card variant="outlined" style={{ width: 450, padding: 20 }}>
//           <TextField
//             id="outlined-basic"
//             label="Title"
//             variant="outlined"
//             style={{ width: 450 }}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="Description"
//             variant="outlined"
//             style={{ width: 450 }}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <Button variant="contained" onClick={handleCourse}>
//             Add course
//           </Button>
//         </Card>
//       </center>
//     </div>
//   );
// }

// export default Course;

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { containerClasses } from '@mui/material';

function Course() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courses, setCourses] = useState([]);

  const handleCourse = async () => {
    try {
      // Retrieve the JWT token from localStorage
      const jwtToken = localStorage.getItem('jwtToken');

      const response = await fetch("http://localhost:3000/admin/courses", {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: description,
          imageLink: '', // Note the corrected property name
          published: true,
        }),
        headers: {
          'Content-Type': 'application/json',
          // Add the JWT token to the Authorization header
          'Authorization': 'Bearer ' + jwtToken,
        },
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // After successfully adding the course, fetch the updated list of courses
        fetchCourses();
      } else {
        console.error('Failed to add course', response.status , response.statusText);
      }
    } catch (error) {
      console.error('Error while adding course:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/courses" , {
        method : "GET",
      });
      console.log(response);
      if (response.ok) {
        console.log('from inside function')
        const data = await response.json();
        setCourses(data); // Update the courses state with the fetched data
      } else {
        console.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error while fetching courses:', error);
    }
  };

  useEffect(() => {
    // Fetch the initial list of courses when the component mounts
    fetchCourses();
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      <center>
        <Card variant="outlined" style={{ width: 450, padding: 20 }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            style={{ width: 450 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            style={{ width: 450 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleCourse}>
            Add course
          </Button>
        </Card>

        {/* Display the list of courses */}
        <div>
          <h2>Course List</h2>
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <strong>{course.title}</strong>: {course.description}
              </li>
            ))}
          </ul>
        </div>
      </center>
    </div>
  );
}

export default Course;
