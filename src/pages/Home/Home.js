import React from 'react';
import "../../App.css"

export default function Home(props) {
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Last Update Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>
              <a href="#"><i className={`fas fa-eye`}></i></a>
            </td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>
              <a href="#"><i className={`fas fa-eye`}></i></a>
            </td>
            <td>Open</td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>
              <a href="#"><i className={`fas fa-eye`}></i></a>
            </td>
            <td>Open</td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>
              <a href="#"><i className={`fas fa-eye`}></i></a>
            </td>
            <td>Reading</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
