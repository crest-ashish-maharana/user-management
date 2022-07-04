import React from 'react';
import { connect } from 'react-redux';

function UsersData({ data }) {
  console.log('Container Data=>\n', data.users)

  return (
    <div>
      <div>
        Full Name: { data.users.fname + " " + data.users.lname }
      </div>
      <br />
      <div>
        Email: { data.users.email }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, null)(UsersData);