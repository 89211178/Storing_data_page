export default function Navbar() {
  const path = window.location.pathname
  return (
      <div className="topnav">
            <a href="/Home">Home page</a>
            <CustomLink href="/Add_recipe">Add recipe</CustomLink>
            <CustomLink href="/Find">Find</CustomLink>
            <CustomLink href="/View_profile">View profile</CustomLink>
      </div>
  )
}

function CustomLink({ href, children, ...props}) {
  const path = window.location.pathname
  return (
      <li className={path === href ? "active" : ""}>
          <a href={href} {...props}>{children}</a>
      </li>
  )
}