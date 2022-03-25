function ContactRow({ user, deleteUser }) {
	return (
		<>
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.phone}</td>
				<td>{user.email}</td>
				<td>
					<button className="btn btn-danger btn-sm px-1 py-0" onClick={() => deleteUser(user.id)}>
						<i className="fa fa-trash"></i>
					</button>
				</td>
			</tr>
		</>
	);
}

export default ContactRow;
