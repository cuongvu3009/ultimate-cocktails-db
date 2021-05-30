import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! it's a dead end</h1>
        <button>
          <Link to='/' className='btn btn-primary'>
            Back Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
