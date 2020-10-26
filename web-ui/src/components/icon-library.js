import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faCheckSquare,
  faCog,
  faTachometerAlt,
  faBars,
  faAngleDoubleLeft,
  faGlobe,
  faTint,
  faPlus,
  faTrash,
  faUsers,
  faUser,
  faCalendar,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCheckSquare,
  faCog,
  faTachometerAlt,
  faBars,
  faAngleDoubleLeft,
  faGlobe,
  faTint,
  faPlus,
  faTrash,
  faUsers,
  faUser,
  faCalendar,
  faChevronLeft
);

/*
  Use it like that on the desired component:
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    <FontAwesomeIcon icon="name-like-that-without-fa" />
*/
