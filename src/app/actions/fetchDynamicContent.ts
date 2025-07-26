'use server'

import getEvents from '../api/events'
import getAchievements from '../api/main_achievements'
import getCouncils from '../api/councils'
import getProjectGroups from '../api/projectGroups'
import getNews from '../api/news'
import getTeachers from '../api/teachers'
import getNotices from '../api/notices'


import getDepartmentNotices from '../api/department'
import getDepartmentAchievements from '../api/achievements'
import getFdpSdp from '../api/faculty_programs'
import getIndustrialVisits from '../api/industrial_visits'
import getInternships from '../api/internships'
import getItlCertifications from '../api/itlCertifications'
import getItlCoursesOffered from '../api/itlCoursesOffered'
import getItlTeachingMethods from '../api/itlTeachingMethods'
import getPlacements from '../api/placements'
import getMentorships from '../api/mentorship'

const departments = ['computers', 'cse', 'mechanical', 'ecs']

export async function fetchDynamicContent() {
  const result = []

  const events = await getEvents()
  result.push(
    ...events.data.map(event => ({
      path: `/events`,
      content: `${event.title} ${event.description}`,
    }))
  )

  const achievements = await getAchievements()
  result.push(
    ...achievements.map(item => ({
      path: `/achievements`,
      content: `${item.title} ${item.description}`,
    }))
  )

  const news = await getNews()
  result.push(
    ...news.data.map(item => ({
      path: `/news`,
      content: `${item.title} ${item.info}`,
    }))
  )

  const notices = await getNotices()
  result.push(
    ...notices.data.map(item => ({
      path: `/notices`,
      content: `${item.title} ${item.info}`,
    }))
  )

  const projectGroups = await getProjectGroups()
  result.push(
    ...projectGroups.map(item => ({
      path: `/project-groups`,
      content: `${item.name} ${item.subtitle}`,
    }))
  )

  const councils = await getCouncils()
  result.push(
    ...councils.map(item => ({
      path: `/councils`,
      content: `${item.name} ${item.subtitle}`,
    }))
  )

  for (const department of departments) {
    const [teachers, notices, achievements, fdpSdp, visits, internships, certifications, courses, methods, placements, mentorships] =
      await Promise.all([
        getTeachers(department),
        getDepartmentNotices(department),
        getDepartmentAchievements(department),
        getFdpSdp(department),
        getIndustrialVisits(department),
        getInternships(department),
        getItlCertifications(department),
        getItlCoursesOffered(department),
        getItlTeachingMethods(department),
        getPlacements(department),
        getMentorships(department),
      ])

    result.push(
      ...teachers.map(n => ({
        path: `/department/${department}?tab=faculty`,
        content: `${n.name} ${n.designation} ${n.areasOfInterest}`,
      })),
      ...notices.map(n => ({
        path: `/department/${department}?tab=department_notices`,
        content: `${n.title} ${n.category} ${n.content}`,
      })),
      ...achievements.map(a => ({
        path: `/department/${department}#AchievementsTab`,
        content: `${a.title} ${a.description} ${a.people} ${a.event}}`,
      })),
      ...fdpSdp.map(p => ({
        path: `/department/${department}?tab=${p.type === 'sdp' ? 'student_dev_prog' : 'faculty_dev_prog'}`,
        content: `${p.title} ${p.type} ${p.participants} ${p.sponsor}`,
      })),
      ...visits.map(v => ({
        path: `/department/${department}`,
        content: `${v.company} ${v.location} ${v.outcomes}`,
      })),
      ...internships.map(i => ({
        path: `/department/${department}?tab=placements`,
        content: `${i.company} ${i.position} ${i.location}`,
      })),
      ...certifications.map(c => ({
        path: `/department/${department}?tab=innovative_teaching`,
        content: `${c.certification} ${c.provider} ${c.benefits}`,
      })),
      ...courses.map(c => ({
        path: `/department/${department}?tab=innovative_teaching`,
        content: `${c.course_name} ${c.description}`,
      })),
      ...methods.map(m => ({
        path: `/department/${department}?tab=innovative_teaching`,
        content: `${m.teaching_method} ${m.description} ${m.learning_outcome}`,
      })),
      ...placements.map(p => ({
        path: `/department/${department}?tab=placements`,
        content: `${p.company} ${p.position} ${p.location}`,
      })),
      ...mentorships.map(m => ({
        path: `/department/${department}?tab=department_initiative`,
        content: `${m.mentor} ${m.specialization} ${m.activities}`,
      }))
    )
  }

  return result
}

