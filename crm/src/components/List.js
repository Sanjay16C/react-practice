

const List = ({cust,setCust,delItem}) => {
    return (
        <div className="list">
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cust.map((val)=>(
                           
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.Name}</td>
                                <td>{val.Email}</td>
                                <td>
                                    <button onClick={()=>delItem(val.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      );
}
 
export default List;