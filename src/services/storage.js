export function saveCourses(courses) {


    localStorage.setItem(

        'courses',

        JSON.stringify(courses)

    )

}





export function getStoredCourses() {


    const stored =
        localStorage.getItem('courses')


    return stored
        ? JSON.parse(stored)
        : null

}





export function clearCourses() {


    localStorage.removeItem(
        'courses'
    )

}





export function clearAllStorage() {


    localStorage.removeItem(
        'courses'
    )


    localStorage.removeItem(
        'progress'
    )


}