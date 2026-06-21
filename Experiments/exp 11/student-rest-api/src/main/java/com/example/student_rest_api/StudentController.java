package com.example.student_rest_api;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student REST API";
    }

    @GetMapping("/student")
    public student getStudent() {
        return new student(101, "Rahul", "CSE");
    }

    @PostMapping("/student")
    public student createStudent(@RequestBody student student) {
        return student;
    }
}