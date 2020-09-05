import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Drawing } from '../../assets/svg/taken.svg';
import "./NotFound.scss";


export default function NotFound() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 mt-2">
        <div className="drawing mr-3">
          <Drawing />
        </div>
      </div>
      <div className="col-xs-12 col-md-6">

        <h1>We are sorry!</h1>

      <h4>It looks like this page has been taken.</h4>
      <Link className="btn btn-success mt-3" to="/">Go to Home </Link>
    </div>
    </div>
  );
}
