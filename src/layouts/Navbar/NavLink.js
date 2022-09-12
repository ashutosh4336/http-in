import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  // exact: PropTypes.bool,
};

NavLink.defaultProps = {
  // exact: false,
  className: '',
};

export default function NavLink({ href, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === href ? pathname.startsWith(href) : false;

  if (isActive) {
    props.className =
      'bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded';
  }

  return (
    <Link href={href}>
      <a className={props.className} {...props}>
        {children}
      </a>
    </Link>
  );
}
