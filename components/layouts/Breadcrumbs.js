import Link from 'next/link';


const Breadcrumbs = ({ paths }) => {
  return (
    <div >
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && <span > / </span>}
          {path.href ? (
            <Link href={path.href}>
              <p>{path.label}</p>
            </Link>
          ) : (
            <span>{path.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;