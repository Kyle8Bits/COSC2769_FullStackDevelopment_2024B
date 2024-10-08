const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");
const { current } = require("@reduxjs/toolkit");

const students = [
  { id: 1, name: "Alice", major: "IT", GPA: 3.3 },
  { id: 2, name: "Bob", major: "SE", GPA: 3.2 },
  { id: 3, name: "Carol", major: "SE", GPA: 2.8 },
  { id: 4, name: "David", major: "IT", GPA: 3.1 },
];

const scores = [
  { course: "Full Stack Dev", student_id: 1, score: 3.3 },
  { course: "Full Stack Dev", student_id: 2, score: 3.1 },
  { course: "Full Stack Dev", student_id: 3, score: 2.7 },
  { course: "Database Applications", student_id: 1, score: 3.6 },
  { course: "Database Applications", student_id: 4, score: 3.4 },
];

const courses = [
  { name: "Full Stack Dev", credits: 12 },
  { name: "Database Applications", credits: 12 },
  { name: "Capstone Project", credits: 24 },
];

const findStudent = (id) => {
  return students.find((std) => std.id === id);
};

const getStudentName = (id) => {
  return findStudent(id).name;
};

const filterCourses = (name) => {
  return courses.filter(c => c.name.includes(name));
}

const getStudentScores = (id) => {
  return scores.filter((sc) => sc.student_id === id);
};

const getStudentByCourseName = (name) => {
    const studentIds = scores.filter((sc) => sc.course === name);
    const students = studentIds.map((std) => findStudent(std.student_id));
    return students;
};

const ScoreType = new GraphQLObjectType({
  name: "Score",
  fields: {
    course_name: { type: GraphQLString, resolve: (c) => c.course },
    student_name: {
      type: GraphQLString,
      resolve: (c) => getStudentName(c.student_id),
    },
    score: { type: GraphQLFloat, resolve: (c) => c.score },
  },
});

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    major: { type: GraphQLString },
    total: { type: GraphQLFloat, resolve: (std) => std.GPA },
    scores: {
      type: new GraphQLList(ScoreType),
      resolve: (std) => getStudentScores(std.id),
    },
  },
});

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: {
    name: { type: GraphQLString },
    credits: { type: GraphQLInt },
    students: {
        type: new GraphQLList(StudentType),
        resolve: (course) => getStudentByCourseName(course.name)
    },
  },
});


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      students: {
        type: new GraphQLList(StudentType),
        resolve: () => students,
      },
      student: {
        type: StudentType,
        args: { id: { type: GraphQLInt } },
        resolve: (parent, args) => findStudent(args.id),
      },
      courses: {
        type: new GraphQLList(CourseType),
        args: { name: { type: GraphQLString } },
        resolve: (parent, args) => filterCourses(args.name),
      },
    },
  }),
});

const app = express();
app.all("/graphql", createHandler({ schema }));

app.listen(2222, () => {
  console.log("Server started");
});




