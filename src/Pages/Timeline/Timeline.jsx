import React from "react";
// import "./timeline.css";
import "./style2.css";
import "./stylescopy.css";
import arrow1 from "../../Images/XMLID_40_.png"
import arrow2 from "../../Images/XMLID_24_.png"
import arrow3 from "../../Images/XMLID_11_.png"

function Timeline() {
  return (
    <div>
      {/* <div>
        <div></div>
        <div>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <h1>TimeLine</h1>
      <section class='section-timeline'>
        <div class='container'>
          <ul class='timeline'>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
          </ul>
        </div> 
      </section>*/}
      <section class='desktop'>
        <div class='div'>
          <img class='iothinc-white' src='iothinc-white-3.png' />
          <div class='navbar'>
            <div class='text-wrapper'>HOME</div>
            <div class='text-wrapper'>TIMELINE</div>
            <div class='text-wrapper'>OUR TEAM</div>
            <div class='text-wrapper'>FAQ</div>
            <div class='text-wrapper'>CONTACT US</div>
          </div>
          <div class='text-wrapper-2' id='heading'>
            IoThinc
          </div>
          <p class='p' id='para'>
            There was something special about this little creature. Donna
            couldn't quite pinpoint what it was, but she knew with all her heart
            that it was true. It wasn't a matter of if she was going to try and
            save it, but a matter of how she was going to save it. She went back
            to the car to get a blanket and when she returned the creature was
            gone.
          </p>
          <div class='overlap'>
            <div class='overlap-group'>
              <div class='rectangle'></div>
              <img class='XMLID' src={arrow1} />
              <img class='img' src={arrow2} />
              <img class='XMLID-2' src={arrow3} />
              <div class='text-wrapper-3'>IOT GAMIFIED</div>
            </div>
            <div class='group' onclick='changeDivContent1()'>
              <div class='text-wrapper-4'>Speakers</div>
              <img
                class='fluent-person'
                src='img/fluent-person-32-filled-2.svg'
              />
            </div>
            <div class='group-2' onclick='changeDivContent2()'>
              <div class='text-wrapper-4'>About</div>
              <img
                class='fluent-person'
                src='img/fluent-person-32-filled.svg'
              />
            </div>
            <div class='group-3' onclick='changeDivContent3()'>
              <div class='text-wrapper-4'>IoThinc</div>
              <img class='fluent-person' src='img/image.svg' />
            </div>
          </div>
        </div>
      </section>
      <section class='notification-section'>
        <div class='group-header'>
          <div class='group-title'>DAY 1</div>
          <div class='group-date'>Tuesday - September 22, 2023</div>
        </div>
        <div class='notification-grid'>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>Session 1</div>
              <div class='notification-time'>9:00 AM</div>
            </div>
            <div class='notification-content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              officiis soluta exercitationem. Minima eveniet, nulla fugit illo
              fuga nihil consectetur quisquam sequi, facere omnis tempora
              itaque? Quae quisquam neque praesentium.
            </div>
          </div>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>Session 2</div>
              <div class='notification-time'>10:00 AM</div>
            </div>
          </div>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>Session 3</div>
              <div class='notification-time'>11:00 AM</div>
            </div>
            <div class='notification-content'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </section>
      <section class='notification-section'>
        <div class='group-header'>
          <div class='group-title'>DAY 2</div>
          <div class='group-date'>Wednesday - September 23, 2023</div>
        </div>
        <div class='notification-grid'>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>Round 1, wsxcgbjikoijhdfghnk</div>
              <div class='notification-time'>9:00 AM</div>
            </div>
            <div class='notification-content'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              at id omnis amet culpa explicabo, a dolore tempora accusantium
              ipsum obcaecati, blanditiis ullam qui velit, ex porro error
              voluptatum eligendi!
            </div>
          </div>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>Round 2, asdfghjklnbvcxch</div>
              <div class='notification-time'>10:00 AM</div>
            </div>
          </div>
          <div class='avatar'>
            <img src='logo.png' />
          </div>
          <div class='notification-card'>
            <div class='notification-header'>
              <svg
                class='icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bell'
                className='svg-inline--fa fa-bell fa-w-14'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                ></path>
              </svg>
              <div class='notification-title'>
                Round 3, djgycbakchuaeasvhuaeksn
              </div>
              <div class='notification-time'>11:00 AM</div>
            </div>
            <div class='notification-content'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus sit doloremque odit magni eos soluta neque sunt, autem
              maxime tempore!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
