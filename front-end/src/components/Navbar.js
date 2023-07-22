export default function Navbar() {
  const path = window.location.pathname;

  return (
    <div className="topnav">
      <div className="nav-links">
        <CustomLink href="/Home">Home page</CustomLink>
        <CustomLink href="/Find_recipe">Find recipe</CustomLink>
        <CustomLink href="/Find_user">Find user</CustomLink>
        <CustomLink href="/View_profile">Your profile</CustomLink>
        <CustomLink href="/Add_recipe">Add recipe</CustomLink>
        <CustomLink href="/Sources">Sources</CustomLink>
        <CustomLink href="/Login">Log out</CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <div className={`nav-link ${path === href ? "active" : ""}`}>
      <a href={href} {...props}>
        {children}
      </a>
    </div>
  );
}


/*
export default function Navbar() {
  const path = window.location.pathname
  return (
      <div className="topnav">
            <p><a href="/Home">Home page</a></p>
            <p><CustomLink href="/Find_recipe">Find recipe</CustomLink></p>
            <p><CustomLink href="/View_comments">View comments</CustomLink></p>
            <p><CustomLink href="/Find_user">Find_user</CustomLink></p>
            <p><CustomLink href="/View_profile">Your profile</CustomLink></p>
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
*/