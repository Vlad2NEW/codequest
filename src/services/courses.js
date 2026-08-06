export const courses = [
    {
        id: 1,
        title: "Vue.js",
        level: "Beginner",
        progress: 40,
        description: "Vue 3, компоненти, router"
    },
    {
        id: 2,
        title: "JavaScript",
        level: "Advanced",
        progress: 70,
        description: "JS advanced concepts"
    }
]


export function getCourses() {
    return courses
}


export function getCourseById(id) {
    return courses.find(course => course.id === Number(id))
}