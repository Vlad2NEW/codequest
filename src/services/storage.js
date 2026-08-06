export function saveCourses(courses) {
    localStorage.setItem(
        'courses',
        JSON.stringify(courses)
    )
}


export function getStoredCourses() {
    const stored = localStorage.getItem('courses')

    if (!stored) {
        return null
    }

    try {
        return JSON.parse(stored)
    } catch {
        return null
    }
}