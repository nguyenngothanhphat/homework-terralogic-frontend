import React from 'react'

export default function UserUnassigned(props) {
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
          <tr>
            <td>Thành Phát</td>
            <td><input type="checkbox" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
