import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="mv.svg" alt="" />
        <span>MVAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="u">
          <img src="https://yt3.ggpht.com/yti/AOXPAcV4hKYaerJNf5jpBYzuIqeWrSTtOqaMR0WiDgdl=s108-c-k-c0x00ffffff-no-rj" alt="" />
          <span>user</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar