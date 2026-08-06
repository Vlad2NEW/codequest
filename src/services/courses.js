export const courses = []


export function getCourses() {
    return courses
}


export function getCourseById(id) {
    return courses.find(course => course.id === Number(id))
}