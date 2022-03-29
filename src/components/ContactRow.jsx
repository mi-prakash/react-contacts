function ContactRow({ user, editUser, deleteUser }) {
	return (
		<>
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.phone}</td>
				<td>{user.email}</td>
				<td>
					<button
						type="button"
						className="btn btn-info text-light btn-sm px-1 py-0 me-1"
						onClick={() => editUser(user)}
					>
						<i className="fa fa-edit"></i>
					</button>
					<button type="button" className="btn btn-danger btn-sm px-1 py-0" onClick={() => deleteUser(user.id)}>
						<i className="fa fa-trash"></i>
					</button>
				</td>
			</tr>
		</>
	);
}

export default ContactRow;
