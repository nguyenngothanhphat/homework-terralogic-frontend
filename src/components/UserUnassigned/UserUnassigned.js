import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllUserUnassignedAction} from '../../redux/actions/AdminAction';

export default function UserUnassigned(props) {
  const usersUnassigned = useSelector(state => state.AdminReducer.usersUnassigned);
  const dispatch = useDispatch();
  let {_id} = props.doc;
  useEffect(() => {
    getAllUsersUnassigned(_id);
  },[_id])
  const getAllUsersUnassigned = (_id) => {
    dispatch(getAllUserUnassignedAction(_id));
  }
  const showUserUnassigned = () => {
    return usersUnassigned.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.name}</td>
          <td><input type="checkbox" value={user._id} /></td>
        </tr>
      )
    })
  }
  return (
    <div>
      <h2>User Unassigned</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showUserUnassigned()}
        </tbody>
      </table>
    </div>
  )
}
