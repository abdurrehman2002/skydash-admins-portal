import { Container, Navbar, Dropdown, Form } from 'react-bootstrap';

import userProfile from '../assets/images/userProfile.jpg'


function Header() {
  return (
    <div className='headerWrapper'>
      <Navbar>
        <Container>
          <div className='search'>
            <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
            <Form.Control type="email" placeholder="Enter email" />


              {/* <i className={`${searchIcon} inputSearchIcon`} ></i> */}


            </Form.Group>

          </div>

        </Container>
      </Navbar>

      <div className='DropdownWrapper'>
        <div className='HeaderNotifications'>
          <Dropdown>
            <Dropdown.Toggle className='DropdownToggleNotification' variant="secondary" id="dropdown-basic">
              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className='p-4'>
              
                <p>Notificatons</p>
              
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-exclamation-circle"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>Application Error</Dropdown.Item>
                  <p>Just now</p>
                </div>
              </div>

              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-cog"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>Settings</Dropdown.Item>
                  <p>Private message</p>
                </div>
              </div>

              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-user-o"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>New user registration</Dropdown.Item>
                  <p>2 days ago</p>
                </div>
              </div>

            </Dropdown.Menu>
          </Dropdown>
        </div>




        <div className='d-flex'>
          <div className='headerProfileImg'>
            <img alt='user profile' src={userProfile} />
          </div>
          <Dropdown >
            <Dropdown.Toggle className='DropdownToggle' variant="success" id="dropdown-basic">

            </Dropdown.Toggle>
            <Dropdown.Menu className='p-3'>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-edit" ></i></div>
                <Dropdown.Item href="#/action-1" className='profileText'>Edit account</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-user"></i></div>
                <Dropdown.Item href="#/action-2" className='profileText'>User profile</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-calendar"></i></div>
                <Dropdown.Item href="#/action-1" className='profileText'>Calender</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-cogs"></i></div>
                <Dropdown.Item href="#/action-3" className='profileText'>Settings</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-sign-out"></i></div>
                <Dropdown.Item href="#/action-3" className='profileText'>Log Out</Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>


    </div>

  );
}

export default Header;