import React from 'react'
import Link from 'next/link'
import {
  SquareArrowOutUpRight,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-14 pb-8 pl-15 text-gray-600">
      <div className="container mx-auto w-full px-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">
                Fr. Agnel Ashram, Bandstand, Bandra (W),
              </li>
              <li className="text-sm">Mumbai 400050, MH, IN</li>
              <li className="text-sm">Phone: +91 22-6711 4000</li>
              <li className="text-sm">Fax: +91 22-6711 4100</li>
              <li className="text-sm">Email: crce@frcrce.ac.in</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">
              STAFF SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://ldap.fragnel.edu.in/sso/module.php/core/loginuserpass.php?AuthState=_e09ef94c4e220fb440ccb822476863ceb2cd2653ed%3Ahttps%3A%2F%2Fldap.fragnel.edu.in%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dgoogle.com%26cookieTime%3D1723957253%26RelayState%3Dhttps%253A%252F%252Fwww.google.com%252Fa%252Ffragnel.edu.in%252FServiceLogin%253Fservice%253Dmail%2526passive%253Dtrue%2526rm%253Dfalse%2526continue%253Dhttps%25253A%25252F%25252Fmail.google.com%25252Fmail%25252F%2526ss%253D1%2526ltmpl%253Ddefault%2526ltmplcache%253D2%2526emr%253D1%2526osid%253D1"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel Mail Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://samay.fragnel.edu.in:1235/timeo/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Biometric Attendance Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://frcrce.ac.in/index.php/other-services"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Other Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Site Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Tinkering Lab
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="http://gyan.fragnel.edu.in:6644/moodle/"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Moodle Access
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="http://granth.fragnel.edu.in:5186/pinfo/index.php"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Students Portal
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Student Notices
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center text-sm hover:text-blue-600"
                  href="https://frcrce.ac.in/images/crce/Essentials_of_Ethics.pdf"
                >
                  Student's handbook- essentials of ethics
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Downloads
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://iic-website.netlify.app/"
                  target="_blank"
                  className="inline-flex items-center text-sm hover:text-blue-600"
                >
                  Institutions Innovation Cell
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Preincubation Details
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  IPR cell
                </Link>
              </li>

              <li>
                <Link
                  href="https://ldap.fragnel.edu.in/manage/login.php"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Change Network Password
                </Link>
              </li>
              <li>
                <Link
                  href="/news2024.pdf"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel News Letter
                </Link>
              </li>
            </ul>
            <h4 className="text-sm mt-4 mb-2 font-semibold text-blue-900">
              Can't find something?
            </h4>
            <Link
              href="/students/grievance"
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              Give Feedback
            </Link>
          </div>{' '}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">
              LIBRARY QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://fragnelcollegelibrary.blogspot.com/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Fr. Agnel College Library Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="http://pustak.fragnel.edu.in:4040/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Online Library Catlog (WebOPAC)
                </Link>
              </li>
              <li>
                <Link
                  href="https://epgp.inflibnet.ac.in/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  PG Students Resource Hub - PG Pathsala
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.rarebooksocietyofindia.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Rare Books Society of India
                </Link>
              </li>
              <li>
                <Link
                  href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  IEEE Xplore
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2Ffrcrce_bandra"
                target="_blank"
                className="text-gray-400 hover:text-blue-600"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/school/fr.-conceicao-rodrigues-college-of-engineering/posts/?feedView=all"
                target="_blank"
                className="text-gray-400 hover:text-blue-600"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/frcrce_official/?hl=en"
                target="_blank"
                className="text-gray-400 hover:text-blue-600"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-900">OTHERS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.agnelashram.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel Ashram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.frcrce.ac.in/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Fr.CRCE Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://agnelbandra.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel Bandra
                </Link>
              </li>
              <li>
                <Link
                  href="https://school.agnelbandra.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel School
                </Link>
              </li>
              <li>
                <Link
                  href="https://iti.agnelbandra.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel ITI
                </Link>
              </li>
              <li>
                <Link
                  href="https://aitted.agnelbandra.org/"
                  target="_blank"
                  className="text-sm hover:text-blue-600"
                >
                  Agnel ITTED
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-200 pt-8">
          <div className="space-x-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-blue-600"
              href="/NEFTForm.pdf"
            >
              Bank / NEFT Details
            </Link>
            <Link
              href="about/mandatory-disclosure"
              target="_blank"
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600"
            >
              Mandatory Disclosure
              <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/students/grievance"
              target="_blank"
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600"
            >
              Online Grievance / Suggession / Feedback System
              <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <Link
            href="https://gdsc-crce.vercel.app/"
            target="_blank"
            className="group inline-flex items-center justify-center gap-2"
          >
            <p className="text-sm text-gray-500 group-hover:underline">
              Made by GDSC CRCE 2024-25
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.05em"
              height="1em"
              viewBox="0 0 256 125"
              className="group-hover:hidden"
            >
              <path
                fill="#77767b"
                d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"
              />
              <path
                fill="#77767b"
                d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"
              />
              <path
                fill="#77767b"
                d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"
              />
              <path
                fill="#77767b"
                d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.05em"
              height="1em"
              viewBox="0 0 256 125"
              className="hidden group-hover:block"
            >
              <path
                fill="#fabc05"
                d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"
              />
              <path
                fill="#109d58"
                d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"
              />
              <path
                fill="#e94436"
                d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"
              />
              <path
                fill="#4385f3"
                d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
