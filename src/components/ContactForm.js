import { useState } from 'react';
import ContactRow from './ContactRow';

function ContactForm() {
	const [users, setUsers] = useState([
		{ id: 1648201365283, name: 'Leslie Berry', email: 'wojiri@mailinator.com', phone: '+1 (728) 439-3731' },
		{ id: 1648201368793, name: 'Shelby Hurley', email: 'juvucizapo@mailinator.com', phone: '+1 (814) 356-4568' },
		{ id: 1648201371778, name: 'Bernard Bauer', email: 'xaxafufod@mailinator.com', phone: '+1 (372) 543-3339' },
	]);

	const [preSearchUsers, setPreSearchUsers] = useState([]);

	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		phone: '',
	});

	const inputHandler = (event) => {
		const { name, value } = event.target;
		setUser((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const searchHandler = (event) => {
		const { value } = event.target;
		let isPreEmpty = false;
		if (!preSearchUsers.length) {
			setPreSearchUsers([...users]);
			isPreEmpty = true;
		}
		if (value !== '') {
			let newUsers;
			if (isPreEmpty) {
				console.log(users[0].id);
				newUsers = users.filter(
					(user) =>
						user.id.toString().includes(value.toLowerCase()) ||
						user.name.toLowerCase().includes(value.toLowerCase()) ||
						user.email.toLowerCase().includes(value.toLowerCase()) ||
						user.phone.toLowerCase().includes(value.toLowerCase()),
				);
			} else {
				newUsers = preSearchUsers.filter(
					(user) =>
						user.id.toString().includes(value.toLowerCase()) ||
						user.name.toLowerCase().includes(value.toLowerCase()) ||
						user.email.toLowerCase().includes(value.toLowerCase()) ||
						user.phone.toLowerCase().includes(value.toLowerCase()),
				);
			}
			setUsers(newUsers);
		} else {
			setUsers([...preSearchUsers]);
			setPreSearchUsers([]);
		}
	};

	const emptyUserState = () => {
		setUser({
			id: '',
			name: '',
			email: '',
			phone: '',
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (user.name !== '' && user.email !== '' && user.phone !== '') {
			let data = { ...user };
			data.id = +new Date();
			setUsers([...users, data]);
			emptyUserState();
			event.target.reset();
		}
	};

	const deleteUser = (user_id) => {
		let confirmText = 'Are you sure?';
		if (window.confirm(confirmText) === true) {
			let newUsers = users.filter((user) => user.id !== user_id);
			setUsers(newUsers);
		}
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
									value={user.name}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="name" className="form-label">
									Phone
								</label>
								<input
									onChange={inputHandler}
									type="text"
									className="form-control bg-dark text-light border-secondary"
									name="phone"
									value={user.phone}
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
									value={user.email}
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
						<div className="input-group my-4">
							<span className="input-group-text bg-info border-info" id="search-addon">
								<i className="fa fa-search"></i>
							</span>
							<input
								onChange={searchHandler}
								type="text"
								className="form-control bg-dark text-light border-info"
								placeholder="Search"
								name="search"
								aria-label="Search"
								aria-describedby="search-addon"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
						<table className="table table-striped table-sm table-dark border-secondary">
							<thead className="table-info">
								<tr>
									<th>#</th>
									<th>Full Name</th>
									<th>Phone</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									<ContactRow key={user.id} user={user} deleteUser={deleteUser} />
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
