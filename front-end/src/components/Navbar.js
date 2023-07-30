export default function Navbar() {
  const path = window.location.pathname;

  return (
    <div className="topnav">
      <div className="nav-links">
        <CustomLink href="/Home">Home page</CustomLink>
        <CustomLink href="/Find_recipe">Find recipe</CustomLink>
        <CustomLink href="/Find_user">Find user</CustomLink>
        <CustomLink href="/View_profile">Your profile</CustomLink>
        <CustomLink href="/Favourite">Favourite</CustomLink>
        <CustomLink href="/Commented">Your comments</CustomLink>
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