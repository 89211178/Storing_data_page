export default function Navbar() {
  const path = window.location.pathname
  return (
      <div className="topnav">
            <p><a href="/Home">Home page</a></p>
            <p><CustomLink href="/Find_recipe">Find recipe</CustomLink></p>
            <p><CustomLink href="/View_comments">View comments</CustomLink></p>
            <p><CustomLink href="/View_profile">View profile</CustomLink></p>
            <p><CustomLink href="/Add_recipe">Add recipe</CustomLink></p>
            <p><CustomLink href="/Login">Log out</CustomLink></p>
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