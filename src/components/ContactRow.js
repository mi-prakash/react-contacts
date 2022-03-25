import { useState } from 'react';

function ContactRow(props) {
	const [user] = useState(props.data);

	const deleteUser = (event) => {
		console.log(event);
	};
	return (
		<>
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>
					<button className="btn btn-danger btn-sm px-1 py-0" onClick={deleteUser}>
						<i className="fa fa-trash"></i>
					</button>
				</td>
			</tr>
		</>
	);
}

export default ContactRow;
