import './App.css';
const data = [
  { caseId: "CB-7444", status: "pending", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
  { caseId: "CB-7444", status: "success", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
  { caseId: "CB-7444", status: "rejected", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" },
  { caseId: "CB-7444", status: "pending", analyst: "Darrell Williamson", createdDate: "1/14/21 22:03", dueDate: "1/22/21 16.00" }
]

function Table() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>CaseID</th>
            <th>Status</th>
            <th>Analyst</th>
            <th>Created Date</th>
            <th>Due Date</th>
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