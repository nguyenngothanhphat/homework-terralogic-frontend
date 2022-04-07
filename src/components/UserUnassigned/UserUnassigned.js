import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {assignUserForDocument, getAllUserUnassignedAction} from '../../redux/actions/AdminAction';

export default function UserUnassigned(props) {
  const [userIds, setUserIds] = useState([])
  const usersUnassigned = useSelector(state => state.AdminReducer.usersUnassigned);
  const dispatch = useDispatch();
  const {_id: id} = props.doc;
  useEffect(() => {
    getAllUsersUnassigned(id);
  },[id])
  const getAllUsersUnassigned = (id) => {
    dispatch(getAllUserUnassignedAction(id));
  }
  const getCheckBoxValue = (e) => {
    const value = e.target.value;
    let isChecked = e.target.checked;
    if (isChecked) {
      setUserIds([
        ...userIds, value
      ])
    }
    
  }
  const handleConfirmAssign = (e) => {
    e.preventDefault();
    dispatch(assignUserForDocument(id, userIds));
  }
  const showUserUnassigned = () => {
    return usersUnassigned.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.name}</td>
          <td><input type="checkbox" value={user._id} onChange={(e) => {getCheckBoxValue(e)}} /></td>
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
            <th>Confirm</th>
          </tr>
        </thead>
        <tbody>
          {showUserUnassigned()}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={(e) => {handleConfirmAssign(e)}}>Confirm</button>
    </div>
  )
}
