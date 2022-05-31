import React from "react"
const Table = ({data}) => {
    return (
            <table className="table table-striped mt-3">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    {data.slice(0,8).map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
                    
                </tbody>
            </table>);
};

export default Table;
   
