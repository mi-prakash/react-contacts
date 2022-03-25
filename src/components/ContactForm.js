import { useState } from 'react';
// import ContactRow from './ContactRow';

function ContactForm() {
	/**
	 * State for table Users
	 */
	const [users, setUsers] = useState([]);

	/**
	 * State for Form User
	 */
	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	/**
	 * Handle input data to store into User state
	 * @param {object} event
	 */
	const inputHandler = (event) => {
		console.log('called');
		const { name, value } = event.target;
		if (name === 'name') {
			user.name = value;
		}
		if (name === 'email') {
			user.email = value;
		}
	};

	/**
	 * Handle data after form submit
	 * @param {object} event
	 */
	const onSubmit = (event) => {
		event.preventDefault();
		let data = { ...user };
		data.id = +new Date();
		setUsers([...users, data]);
		setUser({
			name: '',
			email: '',
		});
		event.target.reset();
	};

	const deleteUser = (user_id) => {
		console.log(user_id);
	};

	return (
		<>
			<div className="container form mt-5">
				<header className="form-header">
					<h2 className="text-info">Add New Contact</h2>
				</header>
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
						<form action="contact-form" onSubmit={onSubmit}>
							<div className="mb-2">
								<label htmlFor="name" className="form-label">
									Full Name
								</label>
								<input
									onChange={inputHandler}
									type="text"
									className="form-control bg-dark text-light border-secondary"
									name="name"
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									onChange={inputHandler}
									type="email"
									className="form-control bg-dark text-light border-secondary"
									name="email"
								/>
							</div>
							<div className="d-grid pt-2">
								<button type="submit" className="btn btn-info btn-sm add-new">
									<i className="fa fa-plus"></i> Add New
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="container contact mt-5">
				<header className="contact-header">
					<h2 className="text-info">Contact List</h2>
				</header>
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
						<table className="table table-striped table-sm table-dark">
							<thead className="table-info">
								<tr>
									<th>#</th>
									<th>Full Name</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									// <ContactRow data={user} key={user.id} />
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>
											<button className="btn btn-danger btn-sm px-1 py-0" onClick={() => deleteUser(user.id)}>
												<i className="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactForm;
