

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

function Course() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null); // Track the ID of the course being edited

  const handleCourse = async () => {
    try {
      // Retrieve the JWT token from localStorage
      const jwtToken = localStorage.getItem("jwtToken");

      if (editCourseId) {
        // If editCourseId is not null, update an existing course
        const response = await fetch(
          `http://localhost:3000/admin/courses/${editCourseId}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: title,
              description: description,
              imageLink: "", // Note the corrected property name
              published: true,
            }),
            headers: {
              "Content-Type": "application/json",
              // Add the JWT token to the Authorization header
              Authorization: "Bearer " + jwtToken,
            },
          }
        );
        if (response.ok) {
          console.log("Course updated successfully");
          setEditCourseId(null); // Clear the editCourseId to exit edit mode
        } else {
          console.error(
            "Failed to update course",
            response.status,
            response.statusText
          );
        }
      } else {
        // If editCourseId is null, add a new course
        const response = await fetch("http://localhost:3000/admin/courses", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description,
            imageLink: "", // Note the corrected property name
            published: true,
          }),
          headers: {
            "Content-Type": "application/json",
            // Add the JWT token to the Authorization header
            Authorization: "Bearer " + jwtToken,
          },
        });
        if (response.ok) {
          console.log("Course added successfully");
        } else {
          console.error(
            "Failed to add course",
            response.status,
            response.statusText
          );
        }
      }

      // Clear the input fields after adding/updating a course
      setTitle("");
      setDescription("");
      // After successfully adding/updating the course, fetch the updated list of courses
      fetchCourses();
    } catch (error) {
      console.error("Error while adding/updating course:", error);
    }
  };

  const fetchCourses = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    try {
      const response = await fetch("http://localhost:3000/admin/courses", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCourses(data.courses); // Update the courses state with the fetched data
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error while fetching courses:", error);
    }
  };

  const handleEditClick = (course) => {
    // When the Edit button is clicked, populate the form with the course details
    setTitle(course.title);
    setDescription(course.description);
    setEditCourseId(course.id);
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
            value={title}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleCourse}>
            {editCourseId ? "Update Course" : "Add Course"}
          </Button>
        </Card>

        {/* Display the list of courses */}
        <div>
          <h2>Course List</h2>
          <ul style={{
            listStyle : "none"
          }}>
            {courses.map((course) => (
              <li key={course.id}>
                <strong>{course.title}</strong>: {course.description}{" "}
                <Button onClick={() => handleEditClick(course)}>Edit</Button>
              </li>
            ))}
          </ul>
        </div>
      </center>
    </div>
  );
}

export default Course;
