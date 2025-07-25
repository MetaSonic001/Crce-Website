
'use server'

import getEvents from '../api/events'
import getAchievements from '../api/main_achievements'
import getCouncils from '../api/councils'
import getProjectGroups from '../api/projectGroups'
import getNews from '../api/news'
import getTeachers from '../api/teachers'
import getNotices from '../api/notices'
//divide
import getDepartmentNotices from '../api/department'
import getFdpSdp from '../api/faculty_programs'
import getInternships from '../api/internships'
import getItlCertifications from '../api/itlCertifications'
import getItlCoursesOffered from '../api/itlCoursesOffered'
import getDepartmentPublications from '../api/publications'
import getPlacements from '../api/placements'
import getMentorships from '../api/mentorship'



export async function fetchDynamicContent() {
  const events = await getEvents()
  return events.data.map(event => ({
    path: `/events/${event.id}`,
    content: `${event.title} ${event.description}`,
  }))
}
