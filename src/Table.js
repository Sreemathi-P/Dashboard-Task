import React from 'react';
import './Table.css';
function Table() {

    const data = [
        { caseId: "CB-7444", status: "pending", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
        { caseId: "CB-7444", status: "success", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
        { caseId: "CB-7444", status: "rejected", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
        { caseId: "CB-7444", status: "pending", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" }
    ]

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">CaseID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Analyst</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.caseId}</td>
                                    {
                                        value.status === "pending" &&
                                        <td>
                                            <div className='s-pending'>{value.status}</div>
                                        </td>
                                    }
                                    {
                                        value.status === "success" &&
                                        <td>
                                            <div className='s-success'>{value.status}</div>
                                        </td>
                                    }
                                    {/*{value.status==="rejected"&&<td><span className="badge text-bg-danger">{value.status}</span></td>} */}
                                    {
                                        value.status === "rejected" &&
                                        <td>
                                            <div className='s-reject'>{value.status}</div>
                                        </td>
                                    }
                                    <td>{value.analyst}</td>
                                    <td>{value.createdDate}</td>
                                    <td>{value.dueDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>

    );
}
export default Table;