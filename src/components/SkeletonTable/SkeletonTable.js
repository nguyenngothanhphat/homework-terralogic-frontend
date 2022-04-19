import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonTable(props) {
  const {sizePage} = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <Skeleton height={24.5} width={711.7} />
            </th>
            <th>
              <Skeleton height={24.5} width={280.64} />
            </th>
            <th>
              <Skeleton height={24.5} width={71.27} />
            </th>
            <th>
              <Skeleton height={24.5} width={184.39} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(parseInt(sizePage))
            .fill()
            .map((item, index) => (
              <tr key={index}>
                <td><Skeleton height={24.5} width={711.7} /></td>
                <td><Skeleton height={24.5} width={280.64} /></td>
                <td><Skeleton height={24.5} width={71.27} /></td>
                <td><Skeleton height={24.5} width={184.39} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
