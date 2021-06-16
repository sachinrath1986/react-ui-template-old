import homeSVG from '../theme/assets/media/svg/Home/Home.svg';
import bookingSVG from '../theme/assets/media/svg/Shopping/Box3.svg';
import profileSVG from '../theme/assets/media/svg/General/User.svg';

export const MENU = [{
    id: '_dashboard',
    label: 'Dashboard',
    route: "/dashboard",
    icon: homeSVG
}, {
    id: '_bookings_',
    label: 'Booking',
    route: "/booking",
    display: false,
    icon: bookingSVG
}, {
    id: "_profile",
    label: "Profile",
    route: "/profile",
    icon: profileSVG
}]