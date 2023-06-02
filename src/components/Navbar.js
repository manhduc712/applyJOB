import { useState, useRef, useEffect, memo, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

import Modal from '../components/Modal'

import logo from '../../src/assets/logo.png';

import '../css/Navbar.css';

const Navbar = () => {
	const navigate = useNavigate();

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const [searchItem, setSearchItem] = useState(false);

	const clickSearch = () => {
		setSearchItem(!searchItem);
	};

	const [login, setLogin] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const [logout, setLogout] = useState(false);

	const handleShow = () => {
		setLogout(!logout);
	};

	const [showLogin, setShowLogin] = useState(false);

	const [showRegister, setShowRegister] = useState(false);

	const [account, setAccount] = useState([])
	const [messageUserNane, setMessageUserNane] = useState('')
	const [messageEmail, setMessageEmail] = useState('')
	const [message, setMessage] = useState('')

	const nameRef = useRef();

	const emailRef = useRef();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((res) => {
				setAccount(res);
			});
		const user = localStorage.getItem('user')
		if (user) {
			setMessage('')
			setLogin(true)
			setShowLogin(false)
		}

	}, []);

	// useMemo(() => {
	// 	// const user = localStorage.getItem('user')
	// 	// if (user) {
	// 	// 	setMessage('')
	// 	// 	setLogin(true)
	// 	// 	setShowLogin(false)
	// 	// }
	// }, [])

	const check = param => {
		if (typeof param === 'undefined' || param.toString() === '')
			return false
		return true

	}

	const handleLogin = () => {
		const userName = nameRef.current.value
		const email = emailRef.current.value

		if (check(userName)) {
			setMessageUserNane('')
			if (check(email)) {
				setMessageEmail('')
				const process = account.find(e => e?.username === userName && e?.email === email);

				if (!process) {
					setMessage('UserName or Email Không đúng !')
				} else {
					setMessage('')
					const user = { ...process }
					localStorage.setItem('user', JSON.stringify(user))
					navigate("/")
					setLogin(true)
					setShowLogin(false)
				}
			} else {
				setMessageEmail('Chưa Nhập Email !')
				emailRef.current.focus()
			}
		} else {
			setMessageUserNane('Chưa Nhập UserName !')
			nameRef.current.focus()
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('user')
		setLogin(false)
		setIsOpen(false)
		setLogout(false)
		navigate("/")
	}


	return (
		<div className='flex justify-between items-center  max-w-[1540px] mx-auto px-4 text-white header'>
			<img src={logo} alt='logo' className='mt-3' width={90} />
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
			<ul className='hidden md:flex text-[#00df9a] font-text'>
				<NavLink to='/' className='p-4'>Home</NavLink>
				<NavLink to='/company' className='p-4'>Company</NavLink>
				<li className='p-4'>About</li>
				<NavLink to='/contact' className='p-4'>Contact</NavLink>
				<li className='p-4'>CV</li>
			</ul>

			<input type='text' placeholder='Search' className={searchItem ? 'rounded-lg bg-black text-white border-2 border-teal-300 h-' : 'hidden'} />

			<div onClick={clickSearch}>
				{searchItem ? <AiOutlineDoubleRight size={25} /> : <AiOutlineSearch size={25} />}
			</div>

			<div onClick={handleNav} className='block md:hidden'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div onClick={handleOpen} className='block ml-3 md:hiden'>
				{!login ? <FaUserAlt size={25} /> : ''}
			</div>

			{isOpen && !login ?
				<div className='flex fixed bg-black w-48 h-11 right-24 rounded-[20px]'>
					<div className='text-[#00df9a] font-bold flex items-center'>
						<button className='flex' onClick={() => { setShowLogin(true) }}>
							<LuLogIn size={20} className='mr-1 ml-3 mt-0.5' />
							Login

						</button>
					</div>
					<div className='text-[#00df9a] font-bold flex items-center'>
						<button className='flex' onClick={() => { setShowRegister(true) }}>
							<LuLogOut size={20} className='mr-1 ml-3 mt-0.5' />
							Register
						</button>
					</div>
				</div>
				: ''}

			<div className={login ? 'flex items-center md:order-2 ml-3' : 'hidden'}>
				<button onClick={handleShow} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
					<img className="w-24 h-9 rounded-full" src={logo} alt="user photo" />
				</button>
			</div>

			{logout && login ?
				<div className='flex fixed bg-black w-48 h-11 right-24 rounded-[20px]'>
					<div className='text-[#00df9a] font-bold flex items-center'>
						<button className='flex' onClick={handleLogout}>
							<LuLogIn size={20} className='mr-1 ml-3 mt-0.5' />
							Logout
						</button>
					</div>
					<div className='text-[#00df9a] font-bold flex items-center'>
						<button className='flex'>
							<CgProfile size={20} className='mr-1 ml-3 mt-0.5' />
							Profile
						</button>
					</div>
				</div>
				: ''}

			<ul className={nav ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
				<h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
				<li className='p-4 border-b border-gray-600'>Home</li>
				<li className='p-4 border-b border-gray-600'>Company</li>
				<li className='p-4 border-b border-gray-600'>About</li>
				<li className='p-4 border-b border-gray-600'>Contact</li>
				<li className='p-4 border-b border-gray-600'>CV</li>
				<li className='p-4 border-b border-gray-600'>Login</li>
				<li className='p-4'>Register</li>
			</ul>

			<Modal isLogin={showLogin} onClose={() => setShowLogin(false)}>
				<div class="w-full bg-black rounded-lg  dark:bg-gray-800 dark:border-gray-700 justify-center items-center">
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label for="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
								<input type="text" name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required="" ref={nameRef} />
								{messageUserNane ? <p className='text-red-500'>{messageUserNane} </p> : ''}
							</div>
							<div>
								<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" ref={emailRef} />
								{messageEmail ? <p className='text-red-500'>{messageEmail} </p> : ''}

							</div>
							{/* <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div> */}
							<div class="flex items-center justify-between">
								<div class="flex items-start">
									<div class="flex items-center h-5">
										<input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
									</div>
									<div class="ml-3 text-sm">
										<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
									</div>
								</div>
								<a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
							</div>
							{message ? <p className='text-red-500'>{message} </p> : ''}
							<button type="button" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleLogin}>Sign in</button>
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
							</p>
						</form>
					</div>
				</div>

			</Modal>

			<Modal isLogin={showRegister} onClose={() => setShowRegister(false)}>
				<div class="w-full bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 justify-center items-center">
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Register your account
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
								<input type="username" name="email" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
							</div>
							<div>
								<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
							</div>
							<div>
								<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
								<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
							</div>
							<button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default memo(Navbar);