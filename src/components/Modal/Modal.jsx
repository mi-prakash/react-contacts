import React from 'react';
import './modal.css';

export function Modal({ userEdit, setUserEdit, users, setUsers }) {
	const editInputHandler = (event) => {
		const { name, value } = event.target;
		setUserEdit((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const onEditSubmit = (event) => {
		event.preventDefault();
		if (userEdit.name !== '' && userEdit.email !== '' && userEdit.phone !== '') {
			users.map((user) => {
				if (user.id === userEdit.id) {
					user.name = userEdit.name;
					user.email = userEdit.email;
					user.phone = userEdit.phone;
				}
			});
			setUsers([...users]);
			event.target.reset();
			setUserEdit({});
		}
	};

	return (
		<div className="custom-modal" id="custom-modal-one">
			<div className="custom-modal-bg custom-modal-exit"></div>
			<div className="custom-modal-container bg-dark text-light border-info">
				<h5 className="modal-title text-info text-center" id="reactModalLabel">
					Edit Contact
				</h5>
				<button className="custom-modal-close custom-modal-exit" onClick={() => setUserEdit({})}>
					<i className="fa fa-close"></i>
				</button>
				<form action="contact-form" onSubmit={onEditSubmit}>
					<div className="modal-body px-0">
						<div className="container form">
							<div className="row">
								<div className="col-12">
									<div className="mb-2">
										<label htmlFor="name" className="form-label">
											Full Name
										</label>
										<input
											onChange={editInputHandler}
											type="text"
											className="form-control bg-dark text-light border-secondary"
											name="name"
											value={userEdit.name}
										/>
									</div>
									<div className="mb-2">
										<label htmlFor="name" className="form-label">
											Phone
										</label>
										<input
											onChange={editInputHandler}
											type="text"
											className="form-control bg-dark text-light border-secondary"
											name="phone"
											value={userEdit.phone}
										/>
									</div>
									<div className="mb-2">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<input
											onChange={editInputHandler}
											type="email"
											className="form-control bg-dark text-light border-secondary"
											name="email"
											value={userEdit.email}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer border-dark p-0">
						<button type="button" className="btn btn-danger btn-sm text-dark" onClick={() => setUserEdit({})}>
							<i className="fa fa-close"></i> Close
						</button>
						<button type="submit" className="btn btn-info btn-sm" data-bs-dismiss="modal">
							<i className="fa fa-save"></i> Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
