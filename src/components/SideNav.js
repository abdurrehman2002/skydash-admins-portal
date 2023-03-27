import Nav from 'react-bootstrap/Nav';

function SideNav() {
  return (
    <Nav className="flex-column sideNav" >
      <div>
        <Nav.Link href="/dashboard" className='SideNavDashboard'>
          <i class="fa fa-th-large" aria-hidden="true"></i>Dashboard</Nav.Link>
        <Nav.Link href="/login" className='SideNavLogin'>
          <i class="fa fa-sign-in" aria-hidden="true"></i>Login</Nav.Link>
        <Nav.Link href="/formPage" className='SideNavForms'>
          <i class="fa fa-columns" aria-hidden="true"></i>Forms</Nav.Link>
        <Nav.Link href="/table" className='SideNavForms'>
          <i class="fa fa-columns" aria-hidden="true"></i>Table</Nav.Link>
      </div>
    </Nav>
  );
}

export default SideNav;