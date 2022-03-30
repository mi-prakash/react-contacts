import { useEffect, useRef, useState } from 'react';

function ContactRow({ user, inlineEditUser, editUser, deleteUser, users, setUsers }) {
	const [_user, setUser] = useState(user);
	const [isEdit, setIsEdit] = useState({
		id: 0,
		name: '',
		status: false,
	});
	const inputRef = useRef(null);

	function quickEdit(stateId, stateName, stateStatus = true) {
		let data = {
			id: stateId,
			name: stateName,
			status: stateStatus,
		};

		setIsEdit(data);
		setUser(_user);
	}

	useEffect(() => {
		if (!isEdit.status) return;
		inputRef.current.focus();
	}, [isEdit.status]);

	const changeStateValue = (event) => {
		const { name, value } = event.target;
		setUser(() => {
			return {
				..._user,
				[name]: value,
			};
		});
	};

	const blurHandler = () => {
		inlineEditUser(_user);
		setIsEdit({ id: 0, name: '', status: false });

		users.map((user) => {
			if (user.id === _user.id) {
				user.name = _user.name;
				user.email = _user.email;
				user.phone = _user.phone;
			}
			return user;
		});
		setUsers([...users]);
	};

	return (
		<>
			<tr>
				<td width="17%">{user.id}</td>
				<td width="23%">
					{isEdit.status && isEdit.name === 'name' && isEdit.id === user.id ? (
						<input
							ref={inputRef}
							type="text"
							className="form-control form-control-sm bg-dark text-light border-info"
							name="name"
							onChange={changeStateValue}
							onBlur={blurHandler}
							value={_user.name}
						/>
					) : (
						<>
							{_user.name} <i className="fa fa-edit text-info pointer" onClick={() => quickEdit(user.id, 'name')}></i>
						</>
					)}
				</td>
				<td width="23%">
					{isEdit.status && isEdit.name === 'phone' && isEdit.id === user.id ? (
						<input
							ref={inputRef}
							type="text"
							className="form-control form-control-sm bg-dark text-light border-info"
							name="phone"
							onChange={changeStateValue}
							onBlur={blurHandler}
							value={_user.phone}
						/>
					) : (
						<>
							{user.phone} <i className="fa fa-edit text-info pointer" onClick={() => quickEdit(user.id, 'phone')}></i>
						</>
					)}
				</td>
				<td width="27%">
					{isEdit.status && isEdit.name === 'email' && isEdit.id === user.id ? (
						<input
							ref={inputRef}
							type="text"
							className="form-control form-control-sm bg-dark text-light border-info"
							name="email"
							onChange={changeStateValue}
							onBlur={blurHandler}
							value={_user.email}
						/>
					) : (
						<>
							{user.email} <i className="fa fa-edit text-info pointer" onClick={() => quickEdit(user.id, 'email')}></i>
						</>
					)}
				</td>
				<td width="10%">
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
