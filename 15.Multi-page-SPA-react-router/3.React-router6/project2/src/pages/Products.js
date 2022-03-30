import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  navigate('/welcome');
  navigate('/welcome', { replace: true });
  //forward and backward navigation
  navigate(-2);

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
